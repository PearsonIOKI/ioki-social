import tornado.ioloop
import tornado.web

import settings


def install_app(inst_app, urls):
    for app in inst_app:
        app_urls = 'from server.%s import ROUTING' % app
        exec(app_urls)
        urls.extend(ROUTING)

routing = []
install_app(settings.main.INSTALLED_APPS, routing)

application = tornado.web.Application(
    routing,
    **settings.main.SETTINGS
)


if __name__ == "__main__":
    application.listen(settings.main.APP_PORT)
    tornado.ioloop.IOLoop.instance().start()