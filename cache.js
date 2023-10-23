const NodeCache = require( "node-cache" );
const apiCache = new NodeCache( { stdTTL: 60 * 60, checkperiod: 0 } );

function get(path) {
    return apiCache.get(path)
}

function set(path, data) {

    apiCache.set(path, data, 60)
}

module.exports = {
    get,
    set
};