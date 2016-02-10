import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BillsService} from './bills-service';
import {AddBillComponent} from './add-bill-component';

@Component({
    selector: 'my-app',
    template: `
    	<h1 class="title">Component Router</h1>
    	<nav>
    	  <a [routerLink]="['AddBill']">AddBill</a>
    	</nav>
    	<router-outlet></router-outlet>
  	`,
	providers:[BillsService],
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/add-bill', name: 'AddBill', component: AddBillComponent}
])
export class AppComponent { }
