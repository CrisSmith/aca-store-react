const express = require('express');
let router = express.Router();
const {list, create} = require('../controllers/orders')

router.get('/orders', list);
router.post('/orders',create)


module.exports = router