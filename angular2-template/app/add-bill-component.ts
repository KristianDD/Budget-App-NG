import {Component} from 'angular2/core';
import {Bill, BillsService} from './bills-service';

@Component({
	selector: "add-bill",
	template:'<input [(ngModel)]="bill.title" type="text" />'
})
export class AddBillComponent {
	bill: Bill
	constructor(private _service:BillsService){}
	addBill() {
		this._service.addBill(this.bill);
	}
}