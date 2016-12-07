import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-taxboard',
  templateUrl: './taxboard.component.html',
  styleUrls: ['./taxboard.component.css']
})
export class TaxboardComponent implements OnInit {

	private subscription: Subscription;

  	constructor(
  		private router: Router, 
  		private route: ActivatedRoute,
  	) 
  	{ 

  	}

  	tax: number = 16;
	result: number = 0;
	title: string = 'Awesome tax calculator';
	subtitle: string = 'Makes your live easier';

	ngOnInit(){
		this.subscription = this.route.params.subscribe((param: any) => {
			let id = param['id'];
			console.log(id);
		});
	}

	decrease(): any{
		this.tax--;
	}

	increase(): any{
		this.tax++;
	}

	onTotalChange(value):any{
		this.result = value;
	}

}
