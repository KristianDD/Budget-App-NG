import {Injectable, OnInit} from 'angular2/core';
import {Bill} from './models/bills';
import {Bills} from './mocks/bills-mock';

@Injectable()
export class BillsService implements OnInit {
    private _bills: Bill[],
        
    ngOnInit() {
        this._bills = Bills;
    }
    
	getBills() { 
        return Promise.resolve(this._bills); 
    }
	
	addBill(bill: Bill){
		this.getBills().then(function(bills){
			bills.push(bill)
		})
	}
}