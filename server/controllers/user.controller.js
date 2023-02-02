const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const User = require('../models/user')

const userRegister = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        // TODO?  validation, verify that they are in characters
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        console.log(req.name, 'just registred!');
        return res.status(201).json({ status: 'ok' })
    } catch (err) {
        console.error(err)
        return res.json({ status: 'error', error: 'Duplicate email' })
    }
};


const userLogin = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })
    if (!user) { return res.json({ status: 'error', error: 'invalid login' }) }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
    if (isPasswordValid) {
        const token = await jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_KEY,
            { expiresIn: "24h" }
        )
        return res.json({ status: 'ok', token: token, user: user })
    } else {
        res.json({ status: 'error', token: false })
    }
};

module.exports = { userRegister, userLogin };
