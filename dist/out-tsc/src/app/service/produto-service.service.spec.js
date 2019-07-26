import { TestBed } from '@angular/core/testing';
import { ProdutoServiceService } from './produto-service.service';
describe('ProdutoServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProdutoServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=produto-service.service.spec.js.map