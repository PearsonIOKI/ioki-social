![](logo.png)

IOKI Social
====================

IOKI Social is a CMS application that helps organizing life and work at a company. This application will facilitate providing employees with all the necessary information about the company, their work, etc. Furthermore, it will serve as means of internal communication.

Table of Contents
-----------------

- [Origin](#origin)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Continuous Integration](#continuous-integration)
- [Contributing](#contributing)
- [Links](#links)
- [License](#license)
- [Thank you](#thank-you)

Origin
-----------
This project was born out of a strong desire to improve the organization of life and work at the office. It will be strongly integrated with the company's day-to-day life. The ultimate aim of this app is to enahnce the working cycle of all employees in the company.

Features
-----------

IOKI Social features :

* Open Source,
* 'twitter like' communication,
* office map,
* attendance list,
* holidays schedule,
* projects Dashboard,
* release schedule,
* Configuring per team,
* Like / Diss,
* group messages,
* burnout charts,
* Ordering meals,
* Teams profiles,
* small ads,
* quick polls,
* book rooms,
* timesheets,
* notifications.


Installation
------------

### 1. Pre-Requirements

*    download Vagrant <http://www.vagrantup.com/downloads.html>

*    download VirtualBox <https://www.virtualbox.org/wiki/Downloads>

check VirtualBox version to ensure that it was installed  correctly, if there you see error,follow instructions to resolve it

```bash
VBoxManage --version
```

Install plugin for vagrant

```bash
vagrant plugin install vagrant-vbguest
```

### 2. Get project

```bash
mkdir ioki-social-project
cd ioki-social-project
```
Fork repository from GitHub project repository https://github.com/PearsonIOKI/ioki-social to your private GitHub account

Clone project from your private GitHub repository

```bash
git clone git@github.com:<yourAccountName>/ioki-social.git
```
Enter cloned folder:

```bash
cd ioki-social
```

Set remote to track changes from main repository, not from yours

```bash
git remote add upstream git@github.com:PearsonIOKI/ioki-social.git
```

You could now pull changes from main repository

```bash
git pull --rebase upstream master
```

### 3. Run Vagrant

Vagrant will install and set up everything for you, just run this command:

```bash
vagrant up
```

### 4. That's almost everything

 You can now start developing project. Run this command:

```bash
vagrant ssh
cd /vagrant/
```

Activate virtual environment

```bash
. isocial-venv/bin/activate
```

Start local server
```bash
python app.py
```

Navigate to browser and type your localhost address to see your changes

```bash
http://127.0.0.1:8080/
```

Other commands:

```bash
# if there were any changes changes in provision section
vagrant provision
# or reboot with provision
vagrant reload --provision
```

Commit changes and push it to yours GitHub fork

```bash
git push
# git push origin dev
```
Last thing you need to do is to open 'Pull request' of your changes on GitHub to the main repository.



Documentation
-----------

Documentation is available on the [wiki](https://github.com/PearsonIOKI/ioki-social/wiki).


Continuous Integration
---------

Travis CI is a hosted, distributed continuous integration service used to build and test project. Travis CI automatically detects when a commit has been made and pushed to a GitHub repository that is using Travis CI, and each time this happens, it will try to build the project and run tests. This includes commits to all branches, not just to the master branch. Travis CI will also build and run pull requests. When that process has completed, it will notify a developer in the way it has been configured to do. Travis will automatically run tests and notify when tests are failing.

<https://travis-ci.org/PearsonIOKI/ioki-social>

Contributing
-----------

First, building, testing and reporting bug is highly appreciated. Please include console's output and reproduction step in your bug report.

Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into master! If you can, please make sure the app fully works before sending the PR, as that will help speed up the process.


If you want to develop, you can look at the issues, especialy the bug and fix them.
Here's a list of tasks (https://github.com/PearsonIOKI/ioki-social/issues?state=open).

Please follow the [Contributions guidelines](../master/CONTRIBUTING.md).

Links
-----------

* [Pearson IOKI](http://www.ioki.com.pl)

* [Pearson](http://www.pearson.com)

* [Contributions guidelines](../master/CONTRIBUTING.md)

* [License](../master/LICENSE.txt)



License
-----------

IOKI Social is licensed under the MIT License

[License](../master/LICENSE.txt)

<http://opensource.org/licenses/mit-license.php>

Thank you!
-----------

We really appreciate all kind of feedback and contributions.  Please visit <https://groups.google.com/d/forum/iokisocial> or send message on <iokisocial@googlegroups.com>.

Thanks for using and supporting IOKI Social!
