from flask import jsonify
from . import services_bp
from .utils.apidatafetcher import fetch_organisms,get_total_publications, get_species_count
from flask_jwt_extended import jwt_required,  get_jwt_identity

@services_bp.route('/dashboard')
@jwt_required()
def dashboard():
    '''Fetch jwt user identity and publications / research paper'''
    publications = fetch_organisms()
    current_user = get_jwt_identity()

    '''Calculate total publication and species count'''
    total_publications = get_total_publications(publications)
    species_count = get_species_count(publications)
    # Todo: add knowledge gaps

    return jsonify ({
        'message': publications,
        'username': current_user,
        'kpi': {
            'missions_covered':total_publications / 2 ,
            'total_publications': total_publications,
            'species_experimented': species_count,
            'knowledge_gaps': 'none'
        }
    })