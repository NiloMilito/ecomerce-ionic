import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Cadastro1Page } from './cadastro1.page';
var routes = [
    {
        path: '',
        component: Cadastro1Page
    }
];
var Cadastro1PageModule = /** @class */ (function () {
    function Cadastro1PageModule() {
    }
    Cadastro1PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Cadastro1Page]
        })
    ], Cadastro1PageModule);
    return Cadastro1PageModule;
}());
export { Cadastro1PageModule };
//# sourceMappingURL=cadastro1.module.js.map