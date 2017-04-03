#cmsRS

##Description
===========

CmsRS is a cms base on: 
* Yii2 advanced template 
* Angular v2 (administration panel)
* CSS · Bootstrap (frontend and backend)

This is cutdown version of my cms.
It is include:
* add pages and menu
* add content to the page
* set up langs
* log in to administration panel
* upload and delete image (todo)

Db scheme:

<img src="https://github.com/cmsrs/cmsrs/blob/master/temp/schema_cmsrs.png" alt="Db scheme" />


The full version available on the website:

http://www.cmsrs.pl/en/cms/cmsrs/about-cmsrs


##Installation
============

1. Install:

		git clone https://github.com/yiisoft/yii2-app-advanced.git
		cd yii2-app-advanced
		composer global require "fxp/composer-asset-plugin:^1.2.0"
		composer create-project --prefer-dist yiisoft/yii2-app-advanced cmsrs
		
		cd cmsrs
		git clone https://github.com/cmsrs/cmsrs2.git
		rm -rf common frontend admin; mv cmsrs2/* .; rm -rf  cmsrs2


2. Set db:

	Change: `common/config/main-local.php` accordingly.
	
	Create table to database from `temp/cmsrs4.sql` in my case:
	
		mysql --default-character-set=utf8 -u cmsrs -ppass123456 cmsrs < ./temp/cmsrs4.sql 
	
	Insert admin user name demo/demo - to administration panel:
	

		INSERT INTO `user` (`id`, `username`, `auth_key`, `password_hash`, `password_reset_token`, `email`, `status`, `created_at`, `updated_at`) VALUES
    		(1, 'demo', 'u4qnlunMrSWqcyitTV06gH5C8ZlAaWar', '$2y$13$dN9ipH0Pc2zLBsDGfIkLOuZDvG0Lv5YACMWCAUIYeCHqNKfw3VbDa', NULL, 'demo@localhost.com', 10, 1428424049, 1428424049);


3. Set vhosts:
	
	Frontend:

	 url: `cmsrs3.loc` 
	 `/path/to/yii2-app-advanced/cmsrs/frontend/web/`
	
	Backend:

	 url:  `cmsrs3admin.loc` (it is a important name)
	 `/path/to/yii2-app-advanced/cmsrs/admin/web/`


		<VirtualHost *:80>
			ServerName cmsrs3.loc
			DocumentRoot "/path/to/yii2-app-advanced/cmsrs/frontend/web/"
			
			<Directory "/path/to/yii2-app-advanced/cmsrs/frontend/web/">
               # use mod_rewrite for pretty URL support
               RewriteEngine on
               # If a directory or a file exists, use the request directly
               RewriteCond %{REQUEST_FILENAME} !-f
               RewriteCond %{REQUEST_FILENAME} !-d
               # Otherwise forward the request to index.php
               RewriteRule . index.php

               # use index.php as index file
               DirectoryIndex index.php

               # ...other settings...
			</Directory>
       </VirtualHost>


		<VirtualHost *:80>
			ServerName cmsrs3admin.loc  
			DocumentRoot "/path/to/yii2-app-advanced/cmsrs/admin/web/"
			
			<Directory "/path/to/yii2-app-advanced/cmsrs/admin/web/">
               # use mod_rewrite for pretty URL support
               RewriteEngine on
               # If a directory or a file exists, use the request directly
               RewriteCond %{REQUEST_FILENAME} !-f
               RewriteCond %{REQUEST_FILENAME} !-d
               # Otherwise forward the request to index.php
               RewriteRule . index.php

               # use index.php as index file
               DirectoryIndex index.php

               # ...other settings...
           </Directory>
       </VirtualHost>

4. Edit hosts:

		127.0.0.1 cmsrs3.loc
		127.0.0.1 cmsrs3admin.loc

5. Run server side tests:

		cd temp/scripts_cli
		./go.sh

6. Config cms:

	`common/config/params.php`


7. Backend:

	`http://cmsrs3admin.loc/admin`

	Login as demo/demo. Create menu and pages in many languages


8. Frontend:

	`http://cmsrs3.loc/`


For developers:

- run administration cmsrs panel from source (Angular 2)

```bash
$cd ~
$mkdir cmsrs 
$cd cmsrs
$ng new admincmsrs
$mv src src_org
$cp -r  <path_to_cmsrs2>/temp/src .
$ng serve &
$chromium-browser --disable-web-security --user-data-dir  http://localhost:4200

#build source
$ng build --base-href admin
```
