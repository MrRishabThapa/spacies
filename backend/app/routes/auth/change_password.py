from flask import request, jsonify
from flask_jwt_extended import create_access_token
from . import auth_bp
from app.models.models import Users

@auth_bp.route("/user_auth", methods=["POST"])
def user_auth():
   old_password = request.get_json()
    email = request.get_json()

    if not email:
        return jsonify({"message": "Missing input fields"}), 400

    user = Users.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "Invalid email or password"}), 401
    
    
    return jsonify({"message": "Login successful", "access_token": access_token}), 200
