import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleDetailService } from './people-detail.service';
import { AppHelperService } from '../app.helper';
import { PeopleHelperService } from '../people/people.helper';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css'],
})
export class PeopleDetailComponent implements OnInit {

	actor: Object = {};
	cast: Object[] = [];
	crew: Object[] = [];
	title: string = "Actor Details!"; 

	constructor(
		private peopleDetailService: PeopleDetailService,
		private router: Router, 
  		private route: ActivatedRoute,
  		private appHelper: AppHelperService,
  		private peopleHelper: PeopleHelperService
	) { }

	/**
	* Initiliaze the people detail component requesting actor details,
	* actor cast and actor crew
	**/
	ngOnInit() {
		this.route.params.subscribe((param: any) => {
			let id = param['id'];
			this.peopleDetailService.getActorDetails(id).subscribe(response => {
				this.actor = response;
			}, err => {
				this.router.navigate(['/404']);
			});
			this.peopleDetailService.getCastActor(id).subscribe(response => {
				this.cast = response;
			} , err => {
				this.router.navigate(['/404']);
			});
			this.peopleDetailService.getCrewActor(id).subscribe(response => {
				this.crew = response;
			}, err => {
				this.router.navigate(['/404']);
			});
		});
	}

	/**
	* Given a string, return the image url of tmdb api
	* @param {src} Value to cast a tmdb url
	* @return String with url set to tmdb format
	**/
	getImgUrl(src: string): string {
		return this.appHelper.getImgUrl(src);
	}

	/**
	* Using a double number, cast to 2 digits percent
	* @param {value} double to be cast 
	* @return two digits percent
	**/
	castFloatPercent(value: number): string{
		return this.peopleHelper.castFloatPercet(value);
	}

	/**
	* Check it list is empty
	* @param {list} list to be checked
	* @return boolean value of empty state
	**/
	isEmpty(list): boolean{
		return this.appHelper.isEmpty(list);
	}

	/**
	* Return total cast movies plus total crew movies
	* @return number of plus operation
	**/
	getTotalMovies(): number{
		return this.cast.length + this.crew.length;
	}

	/**
	* Return a gender display by id
	* @param {id} id of gender
	* @return gender display
	**/
	getGenderDisplay(id: number): string{
		return this.peopleHelper.getGenderDisplay(id);
	}

}
