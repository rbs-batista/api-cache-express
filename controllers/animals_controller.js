const service = require('../service');

function getAll(req, res) {
   var data = service.listAll("animais") 

   res.status(data.httpCode).send(data.result)
}

function getById(req, res) {
    const {id} = req.params

    var data = service.findById("animais", id) 
 
    res.status(data.httpCode).send(data.result)
}

module.exports = {
    getAll,
    getById
};
