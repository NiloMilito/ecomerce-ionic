import { TestBed } from '@angular/core/testing';
import { UsuarioServiceService } from './usuario-service.service';
describe('UsuarioServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(UsuarioServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=usuario-service.service.spec.js.map