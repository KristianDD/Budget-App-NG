System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Bill, BillsService, BILLS, billsPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Bill = (function () {
                function Bill(date, amount, title) {
                    this.date = date;
                    this.amount = amount;
                    this.title = title;
                }
                return Bill;
            })();
            exports_1("Bill", Bill);
            BillsService = (function () {
                function BillsService() {
                }
                BillsService.prototype.getBills = function () { return billsPromise; };
                BillsService.prototype.addBill = function (bill) {
                    this.getBills().then(function (bills) {
                        bills.push(bill);
                    });
                };
                BillsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BillsService);
                return BillsService;
            })();
            exports_1("BillsService", BillsService);
            BILLS = [
                new Bill(new Date(), 22.5, "Lunch")
            ];
            billsPromise = Promise.resolve(BILLS);
        }
    }
});
//# sourceMappingURL=bills-service.js.map