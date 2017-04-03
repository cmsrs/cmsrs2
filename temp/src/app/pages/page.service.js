"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var user_service_1 = require('../users/user.service');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var PageService = (function () {
    function PageService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.apiUrlGetPages = "http://cmsrs3admin.loc/api/pages/index";
        this.apiUrlGetPage = "http://cmsrs3admin.loc/api/pages/get";
        this.apiUrlDelPage = "http://cmsrs3admin.loc/api/pages/delete";
        this.apiUrlSavePage = "http://cmsrs3admin.loc/api/pages/save";
        this.apiUrlImgUpload = "http://cmsrs3admin.loc/api/images/upload";
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + userService.getToken() });
        headers.append('Content-Type', 'application/json');
        //headers.append('Content-Type', 'multipart/form-data');
        var options = new http_1.RequestOptions({ headers: headers });
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
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() });
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'multipart/form-data');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this.apiUrlImgUpload, input, options);
    };
    PageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, user_service_1.UserService])
    ], PageService);
    return PageService;
}());
exports.PageService = PageService;
//# sourceMappingURL=page.service.js.map