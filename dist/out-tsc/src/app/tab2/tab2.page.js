import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { UsuarioServiceService } from '../service/usuario-service.service';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(usuarioService, cd) {
        this.usuarioService = usuarioService;
        this.cd = cd;
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.getAll();
    };
    Tab2Page.prototype.getAll = function () {
        var _this = this;
        this.usuarioService.getAll().subscribe(function (usuarios) {
            _this.users = usuarios;
            _this.cd.detectChanges();
        });
    };
    Tab2Page.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioServiceService,
            ChangeDetectorRef])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map