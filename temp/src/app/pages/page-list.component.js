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
var page_service_1 = require('./page.service');
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
        core_1.Component({
            selector: 'page-list',
            template: "\n<h2>Pages</h2>\n\n<div class=\"panel panel-default row\" ng-controller=\"menuListCtrl\">\n\n        <table class=\"table\">\n\n            <thead>\n                <tr>\n                    <th class=\"text-center\">Id</th>\n                    <th class=\"text-center\">Name</th>\n                    <th class=\"text-center\">Published</th>\n                    <th class=\"text-center\">Menus_id</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of pages\">\n                    <td class=\"text-center\">{{item.id}}</td>\n                    <td class=\"text-center\">{{item.page_short_title}}</td>\n                    <td class=\"text-center\">{{item.published}}</td>\n                    <td class=\"text-center\">{{item.menus_id}}</td>\n\n\t\t\t\t\t<td><a   [routerLink]=\"['/page-edit', item.id ]\"  class=\"btn btn-small btn-primary\">edit</a></td>\n\t\t\t\t\t<td><a (click)=\"deletePage(item.id)\" class=\"btn btn-small btn-danger\">delete</a></td>\n                </tr>\n            </tbody>\n\n        </table>\n\n        <div class=\"text-center\">\n            <a   [routerLink]=\"['/page-edit', '0']\" class=\"btn btn-primary\">add</a>\n        </div>\n</div>\n  ",
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService])
    ], PageListComponent);
    return PageListComponent;
}());
exports.PageListComponent = PageListComponent;
//# sourceMappingURL=page-list.component.js.map