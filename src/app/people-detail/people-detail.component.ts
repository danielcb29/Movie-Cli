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

	getImgUrl(src: string): string {
		return this.appHelper.getImgUrl(src);
	}

	castFloatPercent(value: number): string{
		return this.peopleHelper.castFloatPercet(value);
	}

	isEmpty(list): boolean{
		return this.appHelper.isEmpty(list);
	}

	getTotalMovies(): number{
		return this.cast.length + this.crew.length;
	}

	getGenderDisplay(id: number): string{
		return this.peopleHelper.getGenderDisplay(id);
	}

}
