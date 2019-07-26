import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoServiceService } from '../service/produto-service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
var Cadastro1Page = /** @class */ (function () {
    function Cadastro1Page(produtoService, alertController, router) {
        this.produtoService = produtoService;
        this.alertController = alertController;
        this.router = router;
    }
    Cadastro1Page.prototype.ngOnInit = function () {
        this.produto = new Produto();
    };
    Cadastro1Page.prototype.salvar = function () {
        var _this = this;
        this.produtoService.create(this.produto).subscribe(function (novo) {
            console.log("Produto " + novo.productName + " cadastrado com sucesso!");
            _this.presentAlert(novo.productName, " cadastrato com sucesso!");
            _this.router.navigate(['/']);
        }, function (erro) {
            _this.presentAlert("Erro", erro.message);
        }, function () {
        });
    };
    Cadastro1Page.prototype.presentAlert = function (titulo, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: titulo,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Cadastro1Page = tslib_1.__decorate([
        Component({
            selector: 'app-cadastro1',
            templateUrl: './cadastro1.page.html',
            styleUrls: ['./cadastro1.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProdutoServiceService,
            AlertController,
            Router])
    ], Cadastro1Page);
    return Cadastro1Page;
}());
export { Cadastro1Page };
//# sourceMappingURL=cadastro1.page.js.map