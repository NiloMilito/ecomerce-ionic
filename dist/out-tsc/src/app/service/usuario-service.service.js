import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as CryptoJS from 'crypto-js';
var UsuarioServiceService = /** @class */ (function () {
    function UsuarioServiceService(http) {
        this.http = http;
        this.url = 'https://nestjs-ecommerce.herokuapp.com/users';
    }
    UsuarioServiceService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    UsuarioServiceService.prototype.create = function (user) {
        return this.http.post(this.url, user);
    };
    UsuarioServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UsuarioServiceService);
    return UsuarioServiceService;
}());
export { UsuarioServiceService };
//# sourceMappingURL=usuario-service.service.js.map