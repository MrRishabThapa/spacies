from . import services_bp
from flask import jsonify
from flask_jwt_extended import jwt_required,  get_jwt_identity
from .utils.apidatafetcher import fetch_organisms

@services_bp.route('/news')
@jwt_required()
def news():
    '''Fetch jwt user identity and publications / research paper'''

    current_user = get_jwt_identity()
    return jsonify ({
        'message': 'This is the news endpoint',
        'username': current_user
    })