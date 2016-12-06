import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	values: any = {
		amount : 2000,
		tax : 16,
	};

	result: number = 0;
	title: string = 'Awesome tax calculator';
	subtitle: string = 'Makes your live easier';

	calculate(){
		this.result = this.values.amount * this.values.tax / 100;
	}

}
