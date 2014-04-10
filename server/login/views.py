"""
Put here your controller's class and actions.
"""

import tornado.web


class MainHandler(tornado.web.RequestHandler):
    """
    Default http GET handler.
    """
    def get(self):
        self.write("Hello, world")
