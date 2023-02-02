const router = require('express').Router()

const { generateImage, generateChat } = require('../controllers/openaiController');

router.post('/generateimage', generateImage);
router.post('/chatai', generateChat)

module.exports = router;