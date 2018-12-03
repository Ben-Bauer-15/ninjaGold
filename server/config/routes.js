var controller = require('../controllers/scores')
console.log('routes file')

module.exports = function(app){
    app.get('/', function(req,res){
        controller.index(req, res)
    })

    app.get('/allGames', function(req, res){
        controller.getAllGames(req, res)
    })

    app.get('/allScores', function(req, res){
        controller.getAllScores(req, res)
    })

    app.get('/newGame', function(req, res){
        controller.newGame(req, res)
    })

    app.get('/newScore/:id/:location/:score', function(req, res){
        controller.newScore(req, res)
    })

    app.get('/game/:id', function(req, res){
        console.log("getting one game in routes with id " + req.params.id)
        controller.getOneGame(req, res)
    })

}