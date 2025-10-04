from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from .config import Config
cors  = CORS()
db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    '''Integrate Config'''
    app = Flask(__name__)
    app.config.from_object(Config)

    '''Initialize application'''
    db.init_app(app)
    cors.init_app(app, supports_credentials=True)
    jwt.init_app(app)

    '''Register Routes'''
    from .routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    
    return app