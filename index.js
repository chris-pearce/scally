var scally = require('./src/scally.scss');
var settings = require('./src/_settings.scss');
var mixinsFunctions = require('./src/_mixins-functions.scss');
var normaliseReset = require('./src/_normalise-reset.scss');
var base = require('./src/_base.scss');
var container = require('./src/_container.scss');
var grid = require('./src/_grid.scss');
var helpers = require('./src/_helpers.scss');


module.exports = {
    scally: scally,
    settings: settings,
    mixinsFunctions: mixinsFunctions,
    normaliseReset: normaliseReset,
    base: base,
    container: container,
    grid: grid,
    helpers: helpers
};
