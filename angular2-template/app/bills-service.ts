import {Injectable} from 'angular2/core';

export class Bill {
	constructor(
		public date: Date,
		public amount: number,
		public title: string
	){}
}

@Injectable()
export class BillsService {
	getBills() { return billsPromise}
	
	addBill(bill: Bill){
		this.getBills().then(function(bills){
			bills.push(bill)
		})
	}
}

var BILLS = [
	new Bill(new Date(), 22.5, "Lunch")
]

var billsPromise = Promise.resolve(BILLS)