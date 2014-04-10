"""
Put here routing of your bundle.
"""

from .views import MainHandler

ROUTING = [
    (r"/", MainHandler),
    ]
