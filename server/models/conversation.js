const mongoose = require('mongoose')
const User = require('./user')
const { messageSchema } = require('./message')

const conversationSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        messages: [ messageSchema ]
    },
    { collection: 'conversations' }
)

const Conversation = mongoose.model('Conversation', conversationSchema)

module.exports = Conversation