import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProdutoServiceService } from '../service/produto-service.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(produtoService) {
        this.produtoService = produtoService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.showProdutos();
    };
    Tab1Page.prototype.showProdutos = function () {
        var _this = this;
        this.produtoService.getAll().subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    };
    Tab1Page.prototype.cadastrar = function () {
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProdutoServiceService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map