const User = require('../models/user')
const Conversation = require('../models/message')
const { messageSchema, Message } = require('../models/message')


const userConversation = async (req, res) => {
    try {
        // TODO
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'invalid token' })
    }
};

const updateConversationDocument = async (req, res) => {
    try {
        //const user = await User.findOne({ email: req.user.email });
        //Conversation.findOneAndUpdate({ userId: user._id }, { upsert: true }, callback)
        return res.json({status: 'ok', answer: res.answer})
    } catch (err) {
        console.log(err)
    }
};

module.exports = { updateConversationDocument, userConversation };