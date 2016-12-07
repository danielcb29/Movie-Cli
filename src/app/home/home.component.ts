import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	title: string = 'Awesome tax calculator';
	subtitle: string = 'Makes your live easier';

  	constructor(private router: Router) { 

  	}

  	ngOnInit(){

  	}	

  	goTaxboard(){
  		this.router.navigate(['/taxboard']);
  	}

  	goTaxboardWithParams(){
  		this.router.navigate(['/taxboard', 1234]);		
  	}

}
