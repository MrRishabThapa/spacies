from flask import Blueprint

services_bp = Blueprint('app', __name__)


from . import dashboard


