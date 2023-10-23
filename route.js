const express = require('express');
const router = express.Router();
const PersonsController = require('./controllers/persons_controller');
const CarsController = require('./controllers/cars_controller');
const AnimalsController = require('./controllers/animals_controller');

// Rotas
router.get('/', (req, res) => { res.json({"data": "API CACHE EXPRESS"})});
router.get('/pessoas', PersonsController.getAll);
router.get('/pessoas/:id', PersonsController.getById);
router.get('/carros', CarsController.getAll);
router.get('/carros/:id', CarsController.getById);
router.get('/animais', AnimalsController.getAll);
router.get('/animais/:id', AnimalsController.getById);

module.exports = router;