# #################################################
#
# Vagrant's bootstrap file for IOKI-Social project.
#
# #################################################


# Repositories
sudo rpm -i http://epel.mirrors.arminco.com/6/x86_64/epel-release-6-8.noarch.rpm
sudo rpm -i http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
sudo rpm -i http://packages.sw.be/rpmforge-release/rpmforge-release-0.5.2-2.el6.rf.x86_64.rpm


# Dev libs
sudo yum -y groupinstall "Development Tools"
sudo yum -y --enablerepo=remi install python-devel


# Python installation
if [ ! -e /usr/local/bin/python2.7  ]; then
  wget --no-check-certificate https://www.python.org/ftp/python/2.7.6/Python-2.7.6.tgz
  tar xf Python-2.7.6.tgz

  cd Python-2.7.6
  ./configure
  sudo make && sudo make altinstall

  cd ../
  rm -rf Python-2.7.6
  rm Python-2.7.6.tgz

  if [ -e /usr/bin/python2 ]; then
    sudo rm /usr/bin/python2
  fi

  sudo ln -s /usr/local/bin/python2.7 /usr/bin/python2
fi


# PIP installation
if [ ! -e /usr/local/bin/pip  ]; then
  wget --no-check-certificate https://raw.github.com/pypa/pip/master/contrib/get-pip.py
  sudo python2 get-pip.py
  rm get-pip.py
fi


# Virtualenv installation
sudo /usr/local/bin/pip install virtualenv


# Javascript magic stuff installation
sudo yum -y install nodejs
sudo yum -y install npm


# MongoDB installation
sudo yum -y install mongodb
sudo yum -y install mongodb-server

# Run init_project
cd /vagrant
./utils/init_project.sh

