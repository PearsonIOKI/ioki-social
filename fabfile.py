"""
Script which define fabric's methods.
"""

from fabric.api import local, task, lcd

from utils import create_bundle_server as create_bs, create_bundle_client as create_bc


@task
def create_bundle_server(bundle_name=None):
    """
    Creates bundle for server-side of the application.
    """
    create_bs(bundle_name)


@task
def create_bundle_client(bundle_name=None):
    """
    Creates bundle for client-side of the application.
    """
    create_bc(bundle_name)


@task
def create_bundle(bundle_name=None):
    """
    Creates bundle for server and client.
    """
    create_bundle_server(bundle_name)
    create_bundle_client(bundle_name)


@task
def run_test_server(is_ci=False):
    """
    Runs unittests for server-side of the application.
    """
    bundle_list = local('find server/* -type d | grep tests', capture=True)

    for catalog in bundle_list.split("\n"):
        if is_ci:
            xunit_file = catalog.replace('/', '_')
            local("nosetests --with-xunit \
                  --xunit-file=../build/logs/xunit/" +
                  xunit_file + '.xml ' + catalog)
        else:
            local("nosetests " + catalog)


@task
def run_stylechecker_server(is_ci=False):
    """
    Runs style checkers for server-side of the application.
    """
    if is_ci:
        local("pep8 server | tee ../build/logs/stylechecker/pep8.out")
        local("pylint server | tee ../build/logs/stylechecker/pylint.out")
    else:
        local("pep8 server")
        local("pylint server")


@task
def run_test_client():
    """
    Runs unittests for client-side of the application.
    """
    with lcd("client"):
        local('grunt clean', capture=True)
        local('grunt build', capture=True)
        local('grunt test', capture=True)


@task
def run_test():
    """
    Runs unittests for server and client.
    """
    run_test_server()
    run_test_client()