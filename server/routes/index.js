const express = require('express')
const router = express.Router()
const openaiRoutes = require('./openaiRoutes')


router.get('/', (req, res) => {
    res.send("Welcome to your server")
})


router.post('/api/register', (req, res) => {
    console.log(req.body)
    res.status(400).json({status: 'ok'})
})




router.use('/openai', openaiRoutes)

module.exports = router