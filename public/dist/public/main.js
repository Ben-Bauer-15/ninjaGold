(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#total {\n    font-size: 30px;\n    margin-left: 2rem;\n}\n\n.location {\n    outline: 1px solid black;\n    display: inline-block;\n    margin-left: 2rem;\n    vertical-align: top;\n    padding: 0.5rem;\n    width: 18%;\n    text-align: center;\n}\n\nbutton {\n    width: 5.5rem;\n    background-image: linear-gradient(#33f4ff, #0082b3);\n    height: 2.5rem;\n    color: #f9f9f9;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n#activityLog {\n    outline: 1px solid black;\n    margin-top: 3rem;\n    width: 84%;\n    padding: 1rem;\n    overflow-y: scroll;\n    max-height: 400px;\n    margin-left: 2rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvREFBb0Q7SUFDcEQsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvdGFsIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbi5sb2NhdGlvbiB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB3aWR0aDogMTglO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogNS41cmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMzNmNGZmLCAjMDA4MmIzKTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBjb2xvcjogI2Y5ZjlmOTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jYWN0aXZpdHlMb2cge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIHdpZHRoOiA4NCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<h3 id = 'total'>Total Gold: {{gold}}</h3>\n\n<div class = 'location'>\n    <h2>Farm</h2>\n    <h4>Earns 2-5 gold</h4>\n    <button (click) = 'farm()'>Farm!</button>\n</div>\n\n<div class = 'location'>\n    <h2>Cave</h2>\n    <h4>Earns 5-10 gold</h4>\n    <button (click) = 'cave()'>Cave!</button>\n</div>\n\n<div class = 'location'>\n    <h2>House</h2>\n    <h4>Earns 7-15 gold</h4>\n    <button (click) = 'house()'>House!</button>\n</div>\n\n<div class = 'location'>\n    <h2>Casino</h2>\n    <h4>Earn or lose up to 100 gold</h4>\n    <button (click) = 'casino()'>Casino!</button>\n</div>\n\n<div id = 'activityLog'>\n    <h2>Activity Log</h2>\n    <p *ngFor = 'let event of events'>{{event}}</p>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Ninja Gold';
    }
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        this.gameId = "";
        this.events = [];
        this.gold = 0;
        var newGame = this._httpService.makeNewGame();
        newGame.subscribe(function (data) {
            self.gameId = data.data._id;
        });
    };
    AppComponent.prototype.makeNewScore = function (id, location, score) {
        var newScore = this._httpService.makeNewScore(id, location, score);
        newScore.subscribe(function (data) {
            console.log(data);
        });
    };
    AppComponent.prototype.randInt = function (max, min) {
        var random = Math.random();
        var answer = Math.floor((random * (max - min) + min));
        return answer;
    };
    AppComponent.prototype.getOneGame = function () {
        console.log("getting one game in component with id " + this.gameId);
        var game = this._httpService.getOneGame(this.gameId);
        game.subscribe(function (data) {
            console.log(data);
        });
    };
    AppComponent.prototype.allGames = function () {
        var allGames = this._httpService.getAllGames();
        allGames.subscribe(function (data) {
            console.log(data);
        });
    };
    AppComponent.prototype.getAllScores = function () {
        var allScores = this._httpService.getAllScores();
        allScores.subscribe(function (data) {
        });
    };
    AppComponent.prototype.createOutputString = function (number, location) {
        this.gold += number;
        if (number > 0) {
            return "You earned " + number + " gold at the " + location;
        }
        else {
            return "You lost " + number + " gold at the " + location;
        }
    };
    AppComponent.prototype.farm = function () {
        var random = this.randInt(2, 6);
        var response = this.createOutputString(random, "farm");
        this.events.unshift(response);
        this.makeNewScore(this.gameId, "farm", random);
    };
    AppComponent.prototype.cave = function () {
        var random = this.randInt(5, 11);
        var response = this.createOutputString(random, "cave");
        this.events.unshift(response);
        this.makeNewScore(this.gameId, "cave", random);
    };
    AppComponent.prototype.house = function () {
        var random = this.randInt(7, 16);
        var response = this.createOutputString(random, "house");
        this.events.unshift(response);
        this.makeNewScore(this.gameId, "house", random);
    };
    AppComponent.prototype.casino = function () {
        var random = this.randInt(-100, 101);
        var response = this.createOutputString(random, "casino");
        this.events.unshift(response);
        this.makeNewScore(this.gameId, "casino", random);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllScores = function () {
        return this._http.get('/allScores');
    };
    HttpService.prototype.getOneGame = function (id) {
        console.log("getting one game in service with id " + id);
        return this._http.get('/game/' + id);
    };
    HttpService.prototype.getAllGames = function () {
        return this._http.get('/allGames');
    };
    HttpService.prototype.makeNewGame = function () {
        return this._http.get('/newGame');
    };
    HttpService.prototype.makeNewScore = function (id, location, score) {
        return this._http.get('/newScore/' + id + '/' + location + '/' + score);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bbauer/Desktop/MEAN/angular/ninjaGold/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map