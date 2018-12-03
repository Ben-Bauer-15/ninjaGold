import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) {

   }

  getAllScores(){
    return this._http.get('/allScores')
  }

  getOneGame(id){
    console.log("getting one game in service with id " + id)
    return this._http.get('/game/' + id)
  }

  getAllGames(){
    return this._http.get('/allGames')
  }

  makeNewGame(){
    return this._http.get('/newGame')
  }

  makeNewScore(id, location, score){
    return this._http.get('/newScore/' + id + '/' + location + '/' + score)
  }



}
