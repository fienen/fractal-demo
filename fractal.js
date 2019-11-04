var fractal = require('@frctl/fractal').create();
fractal.set('project.title', 'FooCorp Component Library');
fractal.components.set('path', __dirname + '/src/components');

module.exports = fractal;
