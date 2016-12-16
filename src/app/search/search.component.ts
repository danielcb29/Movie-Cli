import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { AppHelperService } from '../app.helper';
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

	/**
	* Given a query, use search service to get results of api
	* If query is empty, clean results and input
	**/
	search(){
		if(this.query){
			this.searchService.searchPeople(this.query).subscribe(response => {
				this.results = response.results;
				this.totalResult = response.total;
			});	
		}else{
			//If query is empty, clean results and total results
			this.results = [];
			this.totalResult = 0;
		}
	}

	/**
	* Clean query input, results array and total results
	**/
	cleanInput(){
		this.query = "";
		this.results = [];
		this.totalResult = 0;
	}

	/**
	* Clean input and redirect to actor details
	* @param {id} id of actor to be redirect
	**/
	redirectToActor(id: number){
		this.cleanInput();
		this.router.navigate(['/actor', id]);
	}

	/**
	* Check it list is empty
	* @param {list} list to be checked
	* @return boolean value of empty state
	**/
	isEmpty(list){
		return this.appHelper.isEmpty(list);
	}

	/**
	* Given a string, return the image url of tmdb api
	* @param {src} Value to cast a tmdb url
	* @return String with url set to tmdb format
	**/
	getImgUrl(src: string): string {
		return this.appHelper.getImgUrl(src);
	}
}
