# MDL / React template for Electron

This repo shows how to use package the [Material Design Lite](http://www.getmdl.io/index.html) "Dashboard" template with react and react-router into a super simple electron app.  It's bare bones, but works.  

Note that if you make changes in the source, you can use CMD+R to reload the page once the file is rebuilt.  Also, you can turn developer tools on and off from the menubar.

It's based on this great article:

https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658#.t806hbl37

# Developing

If you're developing, do this:

* Clone the repo
* Run `npm install`
* Run `npm start`

# Making the electron app

Once you've got the app.js, you can run these to build and package the elcetron app:

* `npm run electron` (local server)
* `npm run package`
