const { Schema, model } = require('mongoose')

const FileSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        required: true
    }
})

module.exports = model('File', FileSchema)