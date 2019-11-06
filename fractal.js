'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Theme settings
 */
const mandelbrot = require('@frctl/mandelbrot');
const myCustomisedTheme = mandelbrot({
    panels: ["html", "view", "context", "resources", "info", "notes"],
    skin: "grey"
});

fractal.web.theme(myCustomisedTheme);

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Aquent Fractal Demo');
fractal.set('project.version', 'v0.1');
fractal.set('project.author', 'Michael Fienen');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Set up BrowserSync
 */
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
    open: true,
    browser: 'google chrome',
    notify: true,
    watch: true
});
