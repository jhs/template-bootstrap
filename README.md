Jeff's Bootstrap Template
=========================

No need to run `bower install` or `npm install`; just clone this repo for the following frontend dev environment:

* jQuery
* Bootstrap 3.2
* Font-awesome
* Grunt 

Also includes the following templates:
* style-tile.html
* blank.html
* bootstrap-components.html
* bootswatch-components.html
* persona.html (for marketing slides)
* team.html (for marketing slides)
* ...and the associated images for assets and custom backgrounds

And convenience symlinks (located in `/public/`)for the following:

* variables.less
* customized-components.less
* app.js
* theme.css 

Importing a template from bootswatch
-----------------------------------

To use a bootswatch template, simply copy over the appropriate variables.less file and run grunt from bower_components/bootstrap. Style-tile.html will give you a feel for how the theme will look. 

Customizing bootstrap
---------------------
You can make further customizations globally in variables.less or on a more local basis in customized-components.less.

Running grunt
-------------
To build `.less` files, make sure to run `grunt` from `/bower_components/bootstrap/`. `Grunt: watch` probably ought to be updated to recompile `.less` files, since it currently does not do so, rendering it useless.





