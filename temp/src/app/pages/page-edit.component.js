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
var menu_service_1 = require('../menus/menu.service');
var shared_service_1 = require('../main/shared.service');
var translate_service_1 = require('../translates/translate.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
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
            menus_id: '',
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
                menus_id: page.menus_id,
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
                    lang: [page.contents[content].lang, forms_1.Validators.required],
                    content: [page.contents[content].content, forms_1.Validators.required]
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
        core_1.ViewChild("fileInput"), 
        __metadata('design:type', Object)
    ], PageEditComponent.prototype, "fileInput", void 0);
    PageEditComponent = __decorate([
        core_1.Component({
            selector: 'page-edit',
            templateUrl: 'app/pages/page-form.html'
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, menu_service_1.MenuService, translate_service_1.TranslateService, router_1.Router, router_1.ActivatedRoute, shared_service_1.SharedService, forms_1.FormBuilder])
    ], PageEditComponent);
    return PageEditComponent;
}());
exports.PageEditComponent = PageEditComponent;
//# sourceMappingURL=page-edit.component.js.map