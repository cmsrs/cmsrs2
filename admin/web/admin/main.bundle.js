webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://cmsrs3admin.loc/api/users/login';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.options = options;
    }
    UserService.prototype.login = function (username, password) {
        var data_in = JSON.stringify({ data: { username: username, password: password } });
        return this.http.post(this.apiUrl, data_in, this.options);
    };
    UserService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.token;
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/user.service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = (function () {
    //constructor(private http: Http ,  private menuService: MenuService  , private _router: Router ){
    function MenuService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.apiUrlGetMenus = "http://cmsrs3admin.loc/api/menus/index";
        this.apiUrlGetMenu = "http://cmsrs3admin.loc/api/menus/get";
        this.apiUrlDelMenu = "http://cmsrs3admin.loc/api/menus/delete";
        this.apiUrlSaveMenu = "http://cmsrs3admin.loc/api/menus/save";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + userService.getToken() });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        this.options = options;
    }
    MenuService.prototype.getMenus = function () {
        var ret = this.http.get(this.apiUrlGetMenus, this.options)
            .map(function (res) {
            //console.log(res.status);
            //console.log(res);
            return res.json().out;
        });
        return ret;
    };
    MenuService.prototype.getMenuById = function (id) {
        var ret = this.http.get(this.apiUrlGetMenu + '/' + id.toString(), this.options)
            .map(function (res) {
            //console.log(res.status);
            //console.log(res);
            return res.json().out;
        });
        return ret;
    };
    MenuService.prototype.deleteMenu = function (id) {
        var out = this.http.delete(this.apiUrlDelMenu + '/' + id.toString(), this.options);
        return out;
    };
    MenuService.prototype.createMenu = function (menu) {
        //console.log( menu  );
        return this.http.post(this.apiUrlSaveMenu, menu, this.options);
        //.map(this.extractData)
        //.catch(this.handleError);
    };
    MenuService.prototype.getPositions = function (menusCount) {
        var positions = [];
        for (var i = 0; i < menusCount; i++) {
            positions[i] = i + 1;
        }
        return positions;
    };
    MenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__users_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__users_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], MenuService);
    return MenuService;
    var _a, _b;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/menu.service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SharedService = (function () {
    function SharedService(http, userService) {
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        this.http = http;
        this.userService = userService;
        this.apiUrlGetConfig = 'http://cmsrs3admin.loc/api/main/getconfig';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + userService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.options = options;
    }
    SharedService.prototype.getConfig = function () {
        var ret = this.http.get(this.apiUrlGetConfig, this.options)
            .map(function (res) {
            //console.log(res.json()  );
            return res.json();
        });
        //console.log( ret );
        return ret;
    };
    SharedService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__users_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__users_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], SharedService);
    return SharedService;
    var _a, _b;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/shared.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageService = (function () {
    function PageService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.apiUrlGetPages = "http://cmsrs3admin.loc/api/pages/index";
        this.apiUrlGetPage = "http://cmsrs3admin.loc/api/pages/get";
        this.apiUrlDelPage = "http://cmsrs3admin.loc/api/pages/delete";
        this.apiUrlSavePage = "http://cmsrs3admin.loc/api/pages/save";
        this.apiUrlImgUpload = "http://cmsrs3admin.loc/api/images/upload";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + userService.getToken() });
        headers.append('Content-Type', 'application/json');
        //headers.append('Content-Type', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        this.options = options;
    }
    PageService.prototype.getPages = function () {
        var ret = this.http.get(this.apiUrlGetPages, this.options)
            .map(function (res) {
            //console.log(res.status);
            //console.log(res);
            return res.json().out;
        });
        return ret;
    };
    PageService.prototype.getPageById = function (id) {
        var ret = this.http.get(this.apiUrlGetPage + '/' + id.toString(), this.options)
            .map(function (res) {
            //console.log(res.status);
            //console.log(res);
            return res.json().out;
        });
        return ret;
    };
    PageService.prototype.deletePage = function (id) {
        var out = this.http.delete(this.apiUrlDelPage + '/' + id.toString(), this.options);
        return out;
    };
    PageService.prototype.createPage = function (page) {
        return this.http.post(this.apiUrlSavePage, page, this.options);
        //.map(this.extractData)
        //.catch(this.handleError);
    };
    PageService.prototype.upload = function (fileToUpload) {
        var input = new FormData();
        input.append("file", fileToUpload);
        //input.append("file", fileToUpload.files[0]);
        input.append("pages_id", 1);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.userService.getToken() });
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiUrlImgUpload, input, options);
    };
    PageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__users_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__users_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], PageService);
    return PageService;
    var _a, _b;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/page.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateService = (function () {
    function TranslateService(fb) {
        this.fb = fb;
    }
    TranslateService.prototype.transformObj = function (data, id) {
        var out = {};
        data.id = id;
        out['data'] = data;
        return JSON.stringify(out);
    };
    TranslateService.prototype.initTranslate = function (lang, type, value) {
        return this.fb.group({
            lang: [lang, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            type: [type, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            value: [value, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    TranslateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object])
    ], TranslateService);
    return TranslateService;
    var _a;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/translate.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.isLogged()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.isLogged = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    };
    AuthGuard.prototype.logOut = function () {
        if (this.isLogged()) {
            localStorage.removeItem('currentUser');
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/auth.guard.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(511);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_auth_guard__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authGuard) {
        this.authGuard = authGuard;
    }
    AppComponent.prototype.logout = function () {
        this.authGuard.logOut();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'my-app',
            template: "\n\t<div  class=\"well\">\n\n\t\t  <h4  [hidden]=\"authGuard.isLogged()\"  class=\"text-center\"><a routerLink='/'>CMSRS-ADMIN</a></h4>\n\n          <nav    [hidden]=\"!authGuard.isLogged()\"    class=\"navbar navbar-default\">\n            <div class=\"container-fluid\">\n\t             <div class=\"navbar-header\">\n\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" routerLink=\"/\">Admin Cmsrs</a> \n                 </div>\n\t\t\t\t <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-left\">\n                       <li><a routerLink=\"/menu-list\">Menus</a></li>\n                       <li><a routerLink=\"/page-list\">Pages</a></li>\n                    </ul>\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n                       <li><a  (click)=\"logout()\" >Log-out</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t </div>\n            </div>\n          </nav>\n\n\t\t  <div class=\"container\">\n\t\t\t <router-outlet></router-outlet>\n\t\t  </div>\n\t</div>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__users_auth_guard__["a" /* AuthGuard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__users_auth_guard__["a" /* AuthGuard */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__desktop_desktop_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_shared_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_login_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_user_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_auth_guard__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menus_menu_list_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menus_menu_edit_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menus_menu_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__translates_translate_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_page_list_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_page_edit_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_page_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__users_login_component__["a" /* LoginComponent */] },
    { path: 'menu-list', component: __WEBPACK_IMPORTED_MODULE_11__menus_menu_list_component__["a" /* MenuListComponent */] },
    //{path: 'menu-add',  component: MenuAddComponent },
    { path: 'menu-edit/:id', component: __WEBPACK_IMPORTED_MODULE_12__menus_menu_edit_component__["a" /* MenuEditComponent */] },
    { path: 'page-list', component: __WEBPACK_IMPORTED_MODULE_15__pages_page_list_component__["a" /* PageListComponent */] },
    { path: 'page-edit/:id', component: __WEBPACK_IMPORTED_MODULE_16__pages_page_edit_component__["a" /* PageEditComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__desktop_desktop_component__["a" /* DesktopComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__users_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__desktop_desktop_component__["a" /* DesktopComponent */],
                __WEBPACK_IMPORTED_MODULE_8__users_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__menus_menu_list_component__["a" /* MenuListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__menus_menu_edit_component__["a" /* MenuEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__users_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__users_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_7__main_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_14__translates_translate_service__["a" /* TranslateService */],
                __WEBPACK_IMPORTED_MODULE_13__menus_menu_service__["a" /* MenuService */],
                __WEBPACK_IMPORTED_MODULE_17__pages_page_service__["a" /* PageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesktopComponent = (function () {
    function DesktopComponent() {
    }
    DesktopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'desktop',
            template: "\n\tDESKTOP\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], DesktopComponent);
    return DesktopComponent;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/desktop.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_shared_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translates_translate_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuEditComponent = (function () {
    function MenuEditComponent(menuService, translateService, router, route, sharedService, fb) {
        this.menuService = menuService;
        this.translateService = translateService;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.fb = fb;
        //public menu: MenuEdit = {};
        this.id = 0;
        this.menuObj = {};
        this.langs = [];
        this.isEdit = false;
    }
    MenuEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.isEdit = (0 == _this.id) ? false : true;
        });
        this.menuForm = this.fb.group({
            published: false,
            position: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            translates: this.fb.array([])
        });
        this.menuService.getMenuById(this.id).subscribe(function (menu) {
            _this.menuObj = menu;
            //console.log(  menu  );
            _this.positions = _this.menuService.getPositions(menu.menus_count);
            _this.menuForm = _this.fb.group({
                published: ('1' === menu.published) ? true : false,
                //position: [ this.positions[menu.position], Validators.required ], 
                position: [parseInt(menu.position), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
                translates: _this.fb.array([])
            });
            var control = _this.menuForm.controls['translates'];
            for (var translate in menu.translates) {
                control.push(_this.translateService.initTranslate(menu.translates[translate].lang, menu.translates[translate].type, //'menu_short_title', 
                menu.translates[translate].value));
            }
        }, function (error) {
            console.log(error);
        });
    };
    MenuEditComponent.prototype.log = function (val) { console.log(val); };
    MenuEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var data = this.translateService.transformObj(f.value, this.id);
        this.menuService.createMenu(data).
            subscribe(function (menu) {
            _this.router.navigateByUrl('/menu-list');
        }, function (error) {
            _this.errorMessage = error;
            console.log(error);
        });
    };
    MenuEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'menu-edit',
            template: __webpack_require__(672)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__translates_translate_service__["a" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__translates_translate_service__["a" /* TranslateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__main_shared_service__["a" /* SharedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__main_shared_service__["a" /* SharedService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === 'function' && _f) || Object])
    ], MenuEditComponent);
    return MenuEditComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/menu-edit.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuListComponent = (function () {
    function MenuListComponent(menuService) {
        this.menuService = menuService;
    }
    MenuListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenus().subscribe(function (menus) {
            //console.log( menus );
            _this.menus = menus;
        });
    };
    MenuListComponent.prototype.deleteMenu = function (id) {
        var _this = this;
        this.menuService.deleteMenu(id).subscribe(function (del) {
            for (var i = 0; i < _this.menus.length; i++) {
                if (id == _this.menus[i].id) {
                    _this.menus.splice(i, 1);
                }
            }
        });
    };
    MenuListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'menu-list',
            template: "\n<h2>Menus</h2>\n\n<div class=\"panel panel-default row\" ng-controller=\"menuListCtrl\">\n\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th class=\"text-center\">Id</th>\n                    <th class=\"text-center\">Name</th>\n                    <th class=\"text-center\">Published</th>\n                    <th class=\"text-center\">Position</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of menus\">\n                    <td class=\"text-center\">{{item.id}}</td>\n                    <td class=\"text-center\">{{item.menu_short_title}}</td>\n                    <td class=\"text-center\">{{item.published}}</td>\n                    <td class=\"text-center\">{{item.position}}</td>\n\t\t\t\t\t\t<td><a [routerLink]=\"['/menu-edit', item.id ]\" class=\"btn btn-small btn-primary\">edit</a></td>\n\t\t\t\t\t\t<td><a (click)=\"deleteMenu(item.id)\" class=\"btn btn-small btn-danger\">delete</a></td>\n                </tr>\n            </tbody>\n\n        </table>\n\n        <div class=\"text-center\">\n            <a   [routerLink]=\"['/menu-edit', '0']\" class=\"btn btn-primary\">add</a>\n        </div>\n</div>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]) === 'function' && _a) || Object])
    ], MenuListComponent);
    return MenuListComponent;
    var _a;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/menu-list.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menus_menu_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_shared_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translates_translate_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PageEditComponent = (function () {
    function PageEditComponent(pageService, menuService, translateService, router, route, sharedService, fb) {
        this.pageService = pageService;
        this.menuService = menuService;
        this.translateService = translateService;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.fb = fb;
        //public page: PageEdit = {};
        this.id = 0;
        //public page: PageEdit;
        this.pageObj = {};
        this.langs = [];
        this.isEdit = false;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.isEdit = (0 == _this.id) ? false : true;
        });
        this.pageForm = this.fb.group({
            published: false,
            is_left_menu: false,
            is_intro_text: false,
            menus_id: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required],
            translates: this.fb.array([]),
            contents: this.fb.array([])
        });
        this.menuService.getMenus().subscribe(function (menus) {
            _this.menuToSelect = [];
            var ii = 0;
            for (var i in menus) {
                if ("1" === menus[i].published) {
                    _this.menuToSelect[ii] = {};
                    _this.menuToSelect[ii].id = menus[i].id;
                    _this.menuToSelect[ii].menu_short_title = menus[i].menu_short_title;
                    ii++;
                }
            }
        });
        this.pageService.getPageById(this.id).subscribe(function (page) {
            _this.pageObj = page;
            _this.pageForm = _this.fb.group({
                published: ('1' === page.published) ? true : false,
                is_left_menu: ('1' === page.is_left_menu) ? true : false,
                is_intro_text: ('1' === page.is_intro_text) ? true : false,
                menus_id: [page.menus_id, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required],
                translates: _this.fb.array([]),
                contents: _this.fb.array([])
            });
            var control = _this.pageForm.controls['translates'];
            for (var translate in page.translates) {
                control.push(_this.translateService.initTranslate(page.translates[translate].lang, page.translates[translate].type, page.translates[translate].value));
            }
            var controlC = _this.pageForm.controls['contents'];
            for (var content in page.contents) {
                controlC.push(_this.fb.group({
                    lang: [page.contents[content].lang, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required],
                    content: [page.contents[content].content, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required]
                }));
            }
        }, function (error) {
            console.log(error);
        });
    };
    PageEditComponent.prototype.addFile = function () {
        var fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            console.log(fileToUpload);
            this.pageService
                .upload(fileToUpload)
                .subscribe(function (res) {
                console.log(res);
            });
        }
    };
    PageEditComponent.prototype.log = function (val) { console.log(val); };
    PageEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var data = this.translateService.transformObj(f.value, this.id);
        this.pageService.createPage(data).
            subscribe(function (page) {
            _this.router.navigateByUrl('/page-list');
        }, function (error) {
            _this.errorMessage = error;
            console.log(error);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])("fileInput"), 
        __metadata('design:type', Object)
    ], PageEditComponent.prototype, "fileInput", void 0);
    PageEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'page-edit',
            template: __webpack_require__(673)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__menus_menu_service__["a" /* MenuService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__menus_menu_service__["a" /* MenuService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__translates_translate_service__["a" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__translates_translate_service__["a" /* TranslateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__main_shared_service__["a" /* SharedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__main_shared_service__["a" /* SharedService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */]) === 'function' && _g) || Object])
    ], PageEditComponent);
    return PageEditComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/page-edit.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageListComponent = (function () {
    function PageListComponent(pageService) {
        this.pageService = pageService;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageService.getPages().subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageListComponent.prototype.deletePage = function (id) {
        var _this = this;
        this.pageService.deletePage(id).subscribe(function (del) {
            for (var i = 0; i < _this.pages.length; i++) {
                if (id == _this.pages[i].id) {
                    _this.pages.splice(i, 1);
                }
            }
        });
    };
    PageListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'page-list',
            template: "\n<h2>Pages</h2>\n\n<div class=\"panel panel-default row\" ng-controller=\"menuListCtrl\">\n\n        <table class=\"table\">\n\n            <thead>\n                <tr>\n                    <th class=\"text-center\">Id</th>\n                    <th class=\"text-center\">Name</th>\n                    <th class=\"text-center\">Published</th>\n                    <th class=\"text-center\">Menus_id</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of pages\">\n                    <td class=\"text-center\">{{item.id}}</td>\n                    <td class=\"text-center\">{{item.page_short_title}}</td>\n                    <td class=\"text-center\">{{item.published}}</td>\n                    <td class=\"text-center\">{{item.menus_id}}</td>\n\n\t\t\t\t\t<td><a   [routerLink]=\"['/page-edit', item.id ]\"  class=\"btn btn-small btn-primary\">edit</a></td>\n\t\t\t\t\t<td><a (click)=\"deletePage(item.id)\" class=\"btn btn-small btn-danger\">delete</a></td>\n                </tr>\n            </tbody>\n\n        </table>\n\n        <div class=\"text-center\">\n            <a   [routerLink]=\"['/page-edit', '0']\" class=\"btn btn-primary\">add</a>\n        </div>\n</div>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */]) === 'function' && _a) || Object])
    ], PageListComponent);
    return PageListComponent;
    var _a;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/page-list.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService, _router) {
        this.userService = userService;
        this._router = _router;
        this.user = {};
        //public accessToken: string = null;
        this.errorMessage = null;
    }
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.userService.login(this.user.username, this.user.password)
            .subscribe(function (data) {
            //this.accessToken = data.json().access_token;
            _this.errorMessage = null;
            //console.log(   this.user.username+"  "+ this.accessToken );
            localStorage.setItem('currentUser', JSON.stringify({ username: _this.user.username, token: data.json().access_token }));
            _this._router.navigate(['/']);
        }, function (error) {
            console.log(error);
            //this.accessToken = null;
            _this.errorMessage = 'Incorrect username or password';
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'login',
            template: "\n\n  <div  class=\"well\">\n        <div *ngIf=\"errorMessage\"  class=\"alert alert-danger\" >\n\t              Error: {{errorMessage}}. Try again.\n\t    </div>\n\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n            <div class=\"form-group\">\n                <label>Login</label>\n                <input name=\"username\" [(ngModel)]=\"user.username\"   #username=\"ngModel\"   class=\"form-control\" required />\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input name=\"password\" type=\"password\"  [(ngModel)]=\"user.password\" #password=\"ngModel\" class=\"form-control\"  required />\n\t\t\t</div>\n\t\t\t<div class=\"text-center\">\n\t\t\t     <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!f.form.valid\">Login</button>\n\t\t\t</div>\n\t\t</form>\n\n  </div>\n\n\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/login.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/rob/angularjs2/cmsrs_compile/admin/src/environment.js.map

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"client-form\">\n\t<form  class=\"well\" [formGroup]=\"menuForm\"  (ngSubmit)=\"onSubmit( menuForm )\" novalidate>\n\n\t\t<h1 *ngIf=\"!isEdit\">Add Menu</h1>\n\t\t<h1 *ngIf=\"isEdit\">Edit Menu</h1>\n\n\t\t<div formArrayName=\"translates\" >\n\t\t\t<div *ngFor=\"let t of menuForm.controls.translates.controls; let i=index\">\n\t\t\t\t<div class=\"form-group\" [formGroupName]=\"i\" >\n\t\t\t\t\t<label>Name {{ menuObj.translates[i].lang }}:</label>\n\t\t\t\t\t<input type=\"text\"  class=\"form-control\"    formControlName=\"value\" /> \n\t\t\t\t\t<input type=\"hidden\"  class=\"form-control\"  formControlName=\"lang\" /> \n\t\t\t\t\t<input type=\"hidden\"  class=\"form-control\"  formControlName=\"type\" /> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<h3>Menu params</h3>\n\t\t<div  class=\"form-group\"  >\n\t\t\t<label>published</label>\n\t\t\t<input type=\"checkbox\"  formControlName=\"published\" />\n\t\t</div>\n\n\t\t<div  class=\"form-group\">\n\t\t\t<label>position</label>\n\n\t\t\t<select name=\"position\" id=\"position\" formControlName=\"position\" require >\n\t\t\t\t<option *ngFor=\"let p of positions\" [ngValue]=\"p\">{{p}}</option>\n\t\t\t</select>\n\t\t</div>\n\n\n\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!menuForm.valid\">Submit</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div class=\"client-form\">\n\t<form  class=\"well\" [formGroup]=\"pageForm\"  (ngSubmit)=\"onSubmit( pageForm )\" novalidate>\n\n\t\t<h1 *ngIf=\"!isEdit\">Add Page</h1>\n\t\t<h1 *ngIf=\"isEdit\">Edit Page</h1>\n\n\t\t<h3>Page translates</h3>\n\t\t<div formArrayName=\"translates\" >\n\t\t\t<div *ngFor=\"let t of pageForm.controls.translates.controls; let i=index\">\n\t\t\t\t<div class=\"form-group\" [formGroupName]=\"i\" >\n\t\t\t\t\t<label>{{ pageObj.translates[i].type }} {{ pageObj.translates[i].lang }}:</label>\n\t\t\t\t\t<input type=\"text\"  class=\"form-control\"    formControlName=\"value\" /> \n\t\t\t\t\t<input type=\"hidden\"  class=\"form-control\"  formControlName=\"lang\" /> \n\t\t\t\t\t<input type=\"hidden\"  class=\"form-control\"  formControlName=\"type\" /> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<h3>Page contents</h3>\n\t\t<div formArrayName=\"contents\" >\n\t\t\t<div *ngFor=\"let t of pageForm.controls.contents.controls; let i=index\">\n\t\t\t\t<div class=\"form-group\" [formGroupName]=\"i\" >\n\t\t\t\t\t<label>text {{ pageObj.contents[i].lang }}:</label>\n\t\t\t\t\t<input type=\"text\"  class=\"form-control\"    formControlName=\"content\" /> \n\t\t\t\t\t<input type=\"hidden\"  class=\"form-control\"  formControlName=\"lang\" /> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<h3>Page params</h3>\n\t\t<div  class=\"form-group\"  >\n\t\t\t<label>published</label>\n\t\t\t<input type=\"checkbox\"  formControlName=\"published\" />\n\t\t</div>\n\n\n\t\t<div class=\"form-group\" >\n\t\t\t<label>is left menu?</label>\n\t\t\t<input name=\"is_left_menu\" type=\"checkbox\"  formControlName=\"is_left_menu\" />\n\t\t</div>\n\n\t\t<div class=\"form-group\" >\n\t\t\t<label>is intro text?</label>\n\t\t\t<input name=\"is_intro_text\" type=\"checkbox\"  formControlName=\"is_intro_text\" />\n\t\t</div>\n\n\t\t<h3>Menus</h3>\n\t\t<div  class=\"form-group\">\n\t\t\t<label>Menus</label>\n\t\t\t<select name=\"menus_is\" id=\"menus_id\" formControlName=\"menus_id\" require >\n\t\t\t\t<option *ngFor=\"let m of  menuToSelect\" [ngValue]=\"m.id\">{{m.menu_short_title}}</option>\n\t\t\t</select>\n\t\t</div>\n\n\n\t\t<h3>Images (todo)</h3>\n\t\t<div  class=\"form-group\">\n\t\t\t<input #fileInput type=\"file\"  placeholder=\"Upload file\" accept=\".jpg,.png\"  />\n\t\t\t<button (click)=\"addFile()\">Add</button>\n\t\t</div>\n\n\n\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!pageForm.valid\">Submit</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ })

},[691]);
//# sourceMappingURL=main.bundle.map