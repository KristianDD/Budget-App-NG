System.register(['angular2/core', './bills-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bills_service_1;
    var AddBillComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bills_service_1_1) {
                bills_service_1 = bills_service_1_1;
            }],
        execute: function() {
            AddBillComponent = (function () {
                function AddBillComponent(_service) {
                    this._service = _service;
                }
                AddBillComponent.prototype.addBill = function () {
                    this._service.addBill(this.bill);
                };
                AddBillComponent = __decorate([
                    core_1.Component({
                        selector: "add-bill",
                        template: '<input [(ngModel)]="bill.title" type="text" />'
                    }), 
                    __metadata('design:paramtypes', [bills_service_1.BillsService])
                ], AddBillComponent);
                return AddBillComponent;
            })();
            exports_1("AddBillComponent", AddBillComponent);
        }
    }
});
//# sourceMappingURL=add-bill-component.js.map