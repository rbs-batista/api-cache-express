const service = require('../service');

function getAll(req, res) {
   var data = service.listAll("pessoas") 

   res.status(data.httpCode).send(data.result)
}

function getById(req, res) {
    const {id} = req.params

    var data = service.findById("pessoas", id) 
 
    res.status(data.httpCode).send(data.result)
}

module.exports = {
    getAll,
    getById
};