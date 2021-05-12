# About
simpleGUI mobile is designed for similar applications to the regular simpleGUI, but with the added condition that it must work with mobile devices. It can only have one application open at once, though, which is a slight downside. It uses an outer layer for desktops, for a quick-and-dirty solution to stretching the UI.
# Add and remove apps
Like simpleGUI desktop, apps exist as a series of links. Unlike it, these links are in `OS/menu.html`. Everything in the ROOT directory is simply the wrapper. Each line is it's own link. If you do end up removing either local app, the source code is still in the `apps/` directory. This folder should also be used for your own local apps. **If your project contains more than 6 apps, the menu/launcher will not display them correctly in certain browsers. I can't figure out why this is happening.**

# Quick tips for production use
Remember to remove or comment out the developer button and to remove the browser, as both are developer tools and will be extremely awkward from the perspective of the user.
