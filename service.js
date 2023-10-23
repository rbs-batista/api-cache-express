const data = require('./data');
const apiCache = require( "./cache" );

function listAll(path) {

   const cached = apiCache.get(path);

   if(cached) {
    return {
        result: cached,
        httpCode: 304
    }
   }

   apiCache.set(path, data[path])

   return {
        result: data[path],
        httpCode: 200
   }
}

function findById(path, id) {

    const cached = apiCache.get(path + '-' + id);
 
    if(cached) {
     return {
        result: cached,
         httpCode: 304
     }
    }
 
    apiCache.set(path + '-' + id, data[path][(id - 1)])
 
    return {
         result: data[path][(id - 1)],
         httpCode: 200
    }
}

module.exports = {
    listAll,
    findById
};