## About me

Bernhard Posselt (Raydiation)


### Working on:

* App Framework app
* News (RSS) app
* Documentation
* Testing


---

## Why

* Awesome Community
* You are not alone
* You want a high quality platform
* It's not gonna fix itself


---

## Get the source, Luke!

* [Set up your developement environment](http://doc.owncloud.org/server/5.0/admin_manual/installation.html#prerequisites)

* Clone the code

        sudo chmod o+rw /var/www
        cd /var/www
        git clone https://github.com/owncloud/core.git owncloud
        git clone https://github.com/owncloud/apps.git apps
        git clone https://github.com/owncloud/3rdparty.git 3rdparty
        mkdir owncloud/data
        sudo chown -R www-data:www-data owncloud/config
        sudo chown -R www-data:www-data owncloud/data
        sudo chown -R www-data:www-data owncloud/apps
        sudo chmod -R o-rw /var/www

    