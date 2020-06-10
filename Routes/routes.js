const express = require('express');
const router = express();
const ContactKeeper = require('../Controllers/contactKeeper');

router.get('/', ContactKeeper.getHome);

module.exports = router;
