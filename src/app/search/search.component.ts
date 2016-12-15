import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import {AppHelperService} from '../app.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	query: string = "";
	results: Object[] = [];
	totalResult: number = 0;

	constructor(
		private searchService: SearchService,
		private appHelper: AppHelperService,
		private router: Router
		) { }

	ngOnInit() {
	}


	search(){
		if(this.query){
			this.searchService.searchPeople(this.query).subscribe(response => {
				this.results = response.results;
				this.totalResult = response.total;
			});	
		}else{
			this.results = [];
			this.totalResult = 0;
		}
	}

	cleanInput(){
		this.query = "";
		this.results = [];
		this.totalResult = 0;
	}

	redirectToActor(id: number){
		this.cleanInput();
		this.router.navigate(['/actor', id]);
	}

	isEmpty(list){
		return this.appHelper.isEmpty(list);
	}

	getImgUrl(src: string): string {
		return this.appHelper.getImgUrl(src);
	}
}
