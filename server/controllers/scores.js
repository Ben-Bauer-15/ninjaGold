var Score  = require('../models/score').score
var Game = require('../models/score').game
console.log('controllers file')

module.exports = {

    index : function(req, res){
        res.sendFile(__dirname + 'index.html')
    },

    getOneGame : function(req, res){
        Game.find({_id : req.params.id}, (err, game)=>{
            if (err){
                console.log("Something went wrong: " + err)
            }
            else {
                res.json({message : "Success", data : game})
            }
        })
    },

    getAllScores : function(req, res){
        Score.find({}, function(err, scores){
            if (err){
                res.send("Something went wrong: " + err)
            }
            else {
                res.json({message : "Success", data : scores})
            }
        })
    },

    getAllGames : function(req, res){
        Game.find({}, function(err, games){
            if (err){
                res.send("Something went wrong: " + err)
            }
            else {
                res.json({message : "Success", data : games})
            }
        })
    },

    newGame : function(req, res){
        var newGame = new Game({scores : [], gold : 0, createdAt : new Date(), updatedAt : new Date()})
        newGame.save(function(err){
            if (err){
                console.log("Something went wrong: " + err)
            }
            else {
                res.json({message : "Success", data : newGame})
            }
        })
    },
    
    newScore : function(req, res){
        
        let newScore = new Score({score : req.params.score, location: req.params.location, createdAt : new Date()})
        newScore.save(function(err){
            if (err){
                console.log("Something went wrong: " + err)
            }
            else {
                Game.updateOne({_id : Object(req.params.id)}, {$push : {scores : newScore}}, function(err){
                    if (err){
                        console.log("Something went wrong: " + err)
                    }
                    else {
                        res.json({message : "Successfully saved score"})
                    }
                })
            }
        })
    }
}