const express = require('express');
const { generateImage, generateChat } = require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage', generateImage);
router.post('/chatai', generateChat)

module.exports = router;