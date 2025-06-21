from flask import Blueprint, request, jsonify, make_response

auth_bp = Blueprint('auth_bp', __name__, url_prefix='/api')

@auth_bp.route('/register', methods=['POST'])
def register():
  """Registers a new user."""
  return jsonify({'message': 'works'}), 200


  
