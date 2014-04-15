import os

# from settings.db_settings import CONNECTION_DATA

APP_PORT = 8090

SETTINGS = {
    "debug": False,
    "autoreload": True,
    "static_path": os.path.join(os.path.dirname(__file__) + "/..", "www-root"),
    "static_url_prefix": "/site/",
}

"""
Add your new bundle here.
"""
INSTALLED_APPS = [
    'login',
]
