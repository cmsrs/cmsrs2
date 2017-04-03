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
var forms_1 = require('@angular/forms');
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
            lang: [lang, forms_1.Validators.required],
            type: [type, forms_1.Validators.required],
            value: [value, forms_1.Validators.required]
        });
    };
    TranslateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], TranslateService);
    return TranslateService;
}());
exports.TranslateService = TranslateService;
//# sourceMappingURL=translate.service.js.map