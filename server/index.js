require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const router = require('./routes');
const mongoose = require('mongoose')


const port = process.env.PORT || 5000

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false })) // To support URL-encoded bodies

mongoose.connect(process.env['MONGO_URI'], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => { console.log("DB Connected") })
.catch((err) => console.log(err))

app.use(cors())
app.use('/api', router)

app.listen(port, () => console.log(`Server started on port ${port}`))
