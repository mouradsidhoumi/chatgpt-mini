const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
    {
        isFromUser: { type: Boolean, required: false },
        content: { type: String, required: true },
        date: { type: String, required: true }
    }
)
const Message = mongoose.model('Message', messageSchema)

module.exports = { messageSchema, Message }