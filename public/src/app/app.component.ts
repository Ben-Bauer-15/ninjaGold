import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events;
  gold;
  gameId;
  title = 'Ninja Gold';
  constructor(private _httpService : HttpService){
  }
  

  ngOnInit(){
    var self = this
    this.gameId = ""
    this.events = []
    this.gold = 0
    let newGame = this._httpService.makeNewGame()
    newGame.subscribe( data => {
      self.gameId = data.data._id
    })
  }

  makeNewScore(id, location, score){
    
    let newScore = this._httpService.makeNewScore(id, location, score)
    newScore.subscribe(data => {
      console.log(data)
    })
  }


  randInt(max, min){
    var random = Math.random()
    var answer = Math.floor((random * (max - min) + min))
    return answer
  }

  getOneGame(){
    console.log("getting one game in component with id " + this.gameId)
    var game = this._httpService.getOneGame(this.gameId)
    game.subscribe(data=>{
      console.log(data)
    })
  }

  allGames(){
    var allGames = this._httpService.getAllGames()
    allGames.subscribe(data=>{
      console.log(data)
    })
  }

  getAllScores(){
    let allScores = this._httpService.getAllScores()
    allScores.subscribe( data =>{
    })
  }

  createOutputString(number, location){
    this.gold += number
    if (number > 0){
      return "You earned " + number + " gold at the " + location
    }
    else {
      return "You lost " + number + " gold at the " + location
    }
  }

  farm(){
    var random = this.randInt(2,6)
    var response = this.createOutputString(random, "farm")
    this.events.unshift(response)
    this.makeNewScore(this.gameId, "farm", random)
  }
  cave(){
    var random = this.randInt(5,11)
    var response = this.createOutputString(random, "cave")
    this.events.unshift(response)
    this.makeNewScore(this.gameId, "cave", random)
  }
  house(){
    var random = this.randInt(7,16)
    var response = this.createOutputString(random, "house")
    this.events.unshift(response)
    this.makeNewScore(this.gameId, "house", random)
  }
  casino(){
    var random = this.randInt(-100, 101)
    var response = this.createOutputString(random, "casino")
    this.events.unshift(response)
    this.makeNewScore(this.gameId, "casino", random)
  }
}
