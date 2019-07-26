import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(cd) {
        this.cd = cd;
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.cd.detectChanges();
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map