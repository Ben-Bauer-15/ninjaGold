var mongoose = require('../config/mongoose').mongo
var ScoreSchema = new mongoose.Schema({
    score: Number,
    location : String,
    createdAt : Date
})
var GameSchema = new mongoose.Schema({
    gold : Number,
    scores : [ScoreSchema],
    createdAt : Date,
    updatedAt : Date
})


mongoose.model('Game', GameSchema)

mongoose.model('Score', ScoreSchema); 
console.log('models file')

module.exports = {
    score : mongoose.model('Score'),
    game : mongoose.model('Game')
}