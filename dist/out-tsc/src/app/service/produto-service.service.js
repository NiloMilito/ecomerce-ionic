import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ProdutoServiceService = /** @class */ (function () {
    function ProdutoServiceService(http) {
        this.http = http;
        this.url = 'https://nestjs-ecommerce.herokuapp.com/products';
    }
    ProdutoServiceService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    ProdutoServiceService.prototype.create = function (produto) {
        return this.http.post(this.url, produto);
    };
    ProdutoServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProdutoServiceService);
    return ProdutoServiceService;
}());
export { ProdutoServiceService };
//# sourceMappingURL=produto-service.service.js.map