const express = require("express")
const router = express.Router()

const { userLogin, userRegister } = require("./controllers/user.controller")
const auth = require("./controllers/auth.controller")
const { updateConversationDocument, userConversation } = require("./controllers/data.controller")
const { generateAnswer, generateImage } = require("./controllers/openai.controller")


router.get('/', (req, res) => {
    res.send("Welcome to your server")
})

router.post('/auth/login', userLogin)
router.post('/auth/register', userRegister)

router.post('/openai/generate/answer', auth, generateAnswer, updateConversationDocument)
router.post('/openai/generate/image', generateImage)

router.get('/conversation', auth, userConversation)

module.exports = router;