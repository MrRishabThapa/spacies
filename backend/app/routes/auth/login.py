from flask import request, jsonify
from flask_jwt_extended import create_access_token
from . import auth_bp
from app.models.models import Users

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Missing input fields"}), 400

    user = Users.query.filter_by(email=email).first()
    if not user or not user.password:
        return jsonify({"message": "Invalid email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify({"message": "Login successful", "access_token": access_token}), 200
