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
var menu_service_1 = require('./menu.service');
var shared_service_1 = require('../main/shared.service');
var translate_service_1 = require('../translates/translate.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
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
            position: ['', forms_1.Validators.required],
            translates: this.fb.array([])
        });
        this.menuService.getMenuById(this.id).subscribe(function (menu) {
            _this.menuObj = menu;
            //console.log(  menu  );
            _this.positions = _this.menuService.getPositions(menu.menus_count);
            _this.menuForm = _this.fb.group({
                published: ('1' === menu.published) ? true : false,
                //position: [ this.positions[menu.position], Validators.required ], 
                position: [parseInt(menu.position), forms_1.Validators.required],
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
        core_1.Component({
            selector: 'menu-edit',
            templateUrl: 'app/menus/menu-form.html'
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, translate_service_1.TranslateService, router_1.Router, router_1.ActivatedRoute, shared_service_1.SharedService, forms_1.FormBuilder])
    ], MenuEditComponent);
    return MenuEditComponent;
}());
exports.MenuEditComponent = MenuEditComponent;
//# sourceMappingURL=menu-edit.component.js.map