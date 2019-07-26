import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Cadastro2Page } from './cadastro2.page';
var routes = [
    {
        path: '',
        component: Cadastro2Page
    }
];
var Cadastro2PageModule = /** @class */ (function () {
    function Cadastro2PageModule() {
    }
    Cadastro2PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Cadastro2Page]
        })
    ], Cadastro2PageModule);
    return Cadastro2PageModule;
}());
export { Cadastro2PageModule };
//# sourceMappingURL=cadastro2.module.js.map