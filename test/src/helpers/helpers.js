/**
 * Parses JSON so it can be passed into a partial.
 */

helpers.parseJSON = function(data, options) {
    return options.fn(JSON.parse(data));
};
