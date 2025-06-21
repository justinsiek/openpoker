from flask import Blueprint, request, jsonify
import bcrypt

from server.config import supabase
from server.auth.utils import create_jwt

auth_bp = Blueprint('auth_bp', __name__, url_prefix='/api')

@auth_bp.route('/register', methods=['POST'])
def register():
  """Registers a new user."""
  if not supabase:
    return jsonify({'message': 'Database connection not initialized'}), 500
        
  data = request.get_json()
  username = data.get('username')
  password = data.get('password')

  if not username or not password:
    return jsonify({'message': 'username and password are required'}), 400
  try:
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    print(f"Attempting registration for user: {username}")

    response = supabase.table('users').insert({
      'username': username,
      'password_hash': hashed_password.decode('utf-8')
    }).execute()

    if hasattr(response, 'error') and response.error:
      error_message = str(response.error)
      print(f"Supabase registration error: {error_message}")
      if '23505' in error_message or 'duplicate key value violates unique constraint' in error_message:
        return jsonify({'message': 'username already exists'}), 409
      return jsonify({'message': 'Registration failed due to database error'}), 500

    if response.data:
      print(f"User {username} registered successfully. DB response: {response.data}")
      return jsonify({'message': 'User registered successfully'}), 201
    else:
      print(f"Registration attempt for {username} resulted in no data and no explicit error.")
      return jsonify({'message': 'Registration failed unexpectedly.'}), 500

  except Exception as e:
    print(f"Exception during registration for {username}: {e}")
    return jsonify({'message': 'An internal error occurred during registration'}), 500


  
