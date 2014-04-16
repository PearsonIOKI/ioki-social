![](logo.png)

IOKI Social
====================

IOKI Social is CMS application that helps organize life and work in company. This application will help workers get information about their work and communicate with others.


Table of Contents
-----------------

- [Origin](#origin)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Links](#links)
- [Contributing](#contributing)
- [License](#license)
- [Thank you](#thank-you)

Origin
-----------
This project was born out of a strong desire to better organize life and work in office. It will be strongly integrated with company. The aim of this app is to improve working cycle of all employees in company.



Features
-----------

IOKI Social features :

* Open Source,
* 'twitter like' communication,
* building plans,
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

Getting Started
==========


Installation
------------

1. Download and install required environment
http://www.pearson.com/
*    download Vagrant
(http://www.vagrantup.com/downloads.html)

*    download VirtualBox
(https://www.virtualbox.org/wiki/Downloads)

check VirtualBox version to ensure that it was installed  correctly, if there you see error,follow instructions to resolve it

```bash
VBoxManage --version
```

Install plugin for vagrant

```bash
vagrant plugin install vagrant-vbguest
```

2. Create new folder, clone GitHub repository into that and configure it

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

3. Run Vagrant
Vagrant will install and set up everything for you, just run these command:

```bash
vagrant up
```

4. That's almost everything. You can now start developing project. Run this command:

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
# if there were any changes in vagrantfile, run this
vagrant provision
# if something went wrong, you can reload vagrant
vagrant reload
```

Commit changes and push it to yours GitHub fork

```bash
git push origin master
```
Last thing you need to do is to open 'Pull request' of your changes on GitHub to the main repository.



Documentation
-----------

Documentation is available on the [wiki](https://github.com/PearsonIOKI/ioki-social/wiki).


Contributing
-----------

First, building, testing and reporting bug is highly appreciated. Please include console's output and reproduction step in your bug report.

Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into master! If you can, please make sure the app fully works before sending the PR, as that will help speed up the process.


If you want to develop, you can look at the issues, especialy the bug and fix them.
Here's a list of tasks (https://github.com/PearsonIOKI/ioki-social/issues?state=open).

Please follow the [contributions guidelines](https://github.com/PearsonIOKI/ioki-social/blob/master/CONTRIBUTING.md).

Links
-----------

* [Pearson IOKI](http://www.ioki.com.pl)

* [Pearson](http://www.pearson.com)

* [Contributions guidelines](../blob/master/CONTRIBUTING.md)

* [License](../blob/master/LICENSE.txt)


License
-----------

IOKI Social is licensed under the MIT License

The MIT License (MIT)

Copyright (c) 2014 IOKI Social

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

<http://opensource.org/licenses/mit-license.php>

Thank you!
-----------

We really appreciate all kind of feedback and contributions.  Please visit <https://groups.google.com/d/forum/iokisocial> or send message on <iokisocial@googlegroups.com>.

Thanks for using and supporting IOKI Social!
