const express = require('express');
const  testController  = require('../controller/testController');

const testRoutes = express.Router()



testRoutes.get('/test/orders',testController)

module.exports = testRoutes;