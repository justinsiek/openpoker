from flask import Blueprint, request, jsonify, make_response
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
    
    if response.data:
      print(f"User {username} registered successfully. DB response: {response.data}")
      return jsonify({'message': 'User registered successfully'}), 201
    else:
      print(f"Registration attempt for {username} resulted in no data and no explicit error.")
      return jsonify({'message': 'Registration failed unexpectedly.'}), 500

  except Exception as e:
    print(f"Exception during registration for {username}: {e}")
    error_message = str(e)
    
    if '23505' in error_message:
      return jsonify({'message': 'Username already exists'}), 409
    return jsonify({'message': 'An internal error occurred during registration'}), 500
  
@auth_bp.route('/login', methods=['POST'])
def login():
    """Logs in a user and returns a JWT via HttpOnly cookie."""
    if not supabase:
        return jsonify({'message': 'Database connection not initialized'}), 500
        
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'username and password required'}), 400

    try:
        print(f"Login attempt for: {username}")
        response = supabase.table('users').select("id, password_hash").eq('username', username).maybe_single().execute()

        if not response.data:
            print(f"Login failed: User {username} not found.")
            return jsonify({'message': 'Invalid credentials'}), 401

        user_data = response.data
        stored_hash = user_data['password_hash'].encode('utf-8')

        if bcrypt.checkpw(password.encode('utf-8'), stored_hash):
            user_id = user_data['id']
            token = create_jwt(user_id)
            print(f"Login successful for {username}. Setting HttpOnly cookie.")
    
            resp = make_response(jsonify({'message': 'Login successful'}))
            
            cookie_options = {
                'httponly': True,
                'samesite': 'Lax',
                'secure': request.is_secure,
                'path': '/'
            }
            resp.set_cookie('jwtToken', token, **cookie_options)

            print(f"DEBUG: Response headers being set for {username}: {resp.headers}")
            return resp, 200
        else:
            print(f"Login failed: Incorrect password for {username}.")
            return jsonify({'message': 'Invalid credentials'}), 401

    except Exception as e:
        print(f"Exception during login for {username}: {e}")
        return jsonify({'message': 'An error occurred during login'}), 500



  
