from flask import jsonify, request
from flask_jwt_extended import create_access_token
from . import auth_bp 
from app.models.models import Users
from app import db

@auth_bp.route("/register", methods=["POST"])
def register():
     
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    name = request.json.get("name", None)

    if not email or not password or not name:
           return jsonify({'message':'missing input fields'}), 400
    exsisting_user = Users.query.filter_by(email=email).first()

    if exsisting_user:
          return jsonify({'message': 'The User already exsists'}), 401
    
    new_user = Users(email=email, name=name, password=password)
    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=name)
    return jsonify ({'message':'Sucessfully created user', 'token':access_token}), 201
    
