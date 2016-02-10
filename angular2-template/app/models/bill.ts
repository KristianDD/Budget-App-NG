import {iBill} from './interfaces/iBill';

export class Bill implements iBill {
	constructor(
		public date: Date,
		public amount: number,
		public title: string
	){}
}