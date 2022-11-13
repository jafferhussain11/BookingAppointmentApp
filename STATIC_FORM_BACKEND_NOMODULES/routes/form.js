const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');
const jsonparser = bodyParser.json();

const formController = require('../controllers/form');

const router = express.Router();//this is a function that returns an object

router.get('/', formController.getUsers);
router.post('/user/adduser',jsonparser,formController.insertUser);
router.delete('/user/deleteuser/:email',formController.deleteUser);

module.exports = router;