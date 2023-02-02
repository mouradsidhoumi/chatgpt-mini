const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const router = require('./routes/index');


const port = process.env.PORT || 5000

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true })) // To support URL-encoded bodies

app.use(cors())

app.use('/', router);

app.listen(port, () => console.log(`Server started on port ${port}`));


