const {Schema, model} = require('mongoose')

const scheme = new Schema({
    city: {type: String, required: true},
    address: {type: String, required: true},
    institution: {type: String, required: false},
    playgroundName: {type: String, required: false},
    game: [Schema.Types.Mixed],
})

module.exports = model('Playground', scheme)