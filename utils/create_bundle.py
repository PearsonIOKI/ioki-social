"""
Create bundle Fabric's script.
"""

import os
import shutil
import re


PATH_TO_SRC_SERVER = "/../dist/server"
PATH_TO_SRC_CLIENT = "/../dist/client"
PATH_TO_DST_SERVER = "/../server"
PATH_TO_DST_CLIENT = "/../client/app"
SERVER_BUNDLE_TPL_NAME = "bundle-tpl"
CLIENT_BUNDLE_TPL_NAME = "bundle-tpl"


def create_bundle_server(bundle_name=None):
    """
    Creates new bundle on server-side.
    """
    try:
        create_from_template(PATH_TO_SRC_SERVER, PATH_TO_DST_SERVER, bundle_name, SERVER_BUNDLE_TPL_NAME)
        msg = "Bundle " + bundle_name + " created."
        print(msg)
    except NameError as e:
        print(e.message)


def create_bundle_client(bundle_name=None):
    """
    Creates new bundle on client-side.
    """
    try:
        create_from_template(PATH_TO_SRC_CLIENT, PATH_TO_DST_CLIENT, bundle_name, CLIENT_BUNDLE_TPL_NAME)
        print("Bundle " + bundle_name + " created.")
    except NameError as e:
        print(e.message)


def create_from_template(src_path, dst_path, bundle_name=None, template_dir=None):
    """
    Creates bundle.
    """

    # root path
    path_file = os.path.dirname(os.path.realpath(__file__))

    # Check for None mane.
    if bundle_name is None:
        raise NameError("Unknown bundle name!")

    # Check for None template dir.
    if template_dir is None:
        raise NameError("Unknown template directory!")

    # Source folder.
    src_full_path = path_file + src_path

    # Destination folder.
    dst_full_path = path_file + dst_path

    # Check for bundle duplicate.
    if os.path.exists(dst_full_path + "/" + bundle_name):
        raise NameError("Bundle " + bundle_name + " already exists!")

    # Check for template dir.
    if not os.path.exists(src_full_path + "/" + template_dir):
        raise NameError("Can't find template dir: " + template_dir + "!")

    # Where's on the path template-dir.
    template_dir_pointer = len(src_full_path)

    for path, dirs, files in os.walk(src_full_path):
        # Gets bundle-tpl structure.
        template_structure = path[(template_dir_pointer):]

        # Work only for specific template-dir!
        search_res = re.search(template_dir, template_structure, re.I)
        if not search_res:
            continue

        # Path to destination server dir with bundle-tpl structure.
        dst_path_with_template = dst_full_path + template_structure

        if not os.path.exists(dst_path_with_template):
            os.makedirs(dst_path_with_template)

        for file in files:
            # Get file in bundle-tpl.
            src_file = path + "/" + file
            # check for same file in destination dir.
            dst_file = dst_path_with_template + "/" + file

            if not os.path.exists(dst_file):
                shutil.copy(src_file, dst_path_with_template)

    os.rename(dst_full_path + "/" + template_dir, dst_full_path + "/" + bundle_name)
