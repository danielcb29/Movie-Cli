import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from './people.service';
import { AppHelperService } from '../app.helper';
import { MovieHelperService } from '../movies/movie.helper';
import { PeopleHelperService } from './people.helper';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

	people = [];
	title = "Popular People!"

	constructor(
		private peopleService: PeopleService,
		private router: Router, 
		private route: ActivatedRoute,
		private appHelper: AppHelperService,
		private movieHelper: MovieHelperService,
		private peopleHelper: PeopleHelperService
	) { }

	ngOnInit() {
		this.peopleService.getPopular().subscribe(response => {
			this.people = response;
		});

	}

	getImgUrl(src: string): string {
		return this.appHelper.getImgUrl(src);
	}

	getMoviesNames(movies: Object[]): string{
		let moviesList = this.movieHelper.getMoviesNames(movies).join().slice(0,31);
		return `${moviesList}...`;
	}

	castFloatPercent(value: number): string{
		return this.peopleHelper.castFloatPercet(value);
	}

}
