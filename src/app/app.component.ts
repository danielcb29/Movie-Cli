import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	tax: number = 16;
	result: number = 0;
	title: string = 'Awesome tax calculator';
	subtitle: string = 'Makes your live easier';

	ngOnInit(){
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
