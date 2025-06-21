from server.config import create_app
from server.auth.routes import auth_bp
import os

app = create_app()

app.register_blueprint(auth_bp)

@app.route('/')
def index():
    return "Flask server is running!"

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    print(f"Starting Flask server on port {port}...")
    app.run(debug=os.getenv('FLASK_DEBUG', 'True').lower() == 'true', host='localhost', port=port)