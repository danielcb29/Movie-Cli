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

	/**
	* Initialize the people component requesting popular people
	**/
	ngOnInit() {
		this.peopleService.getPopular().subscribe(response => {
			this.people = response;
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
	* Get movies names by movies object list 
	* @param {movies} movies object list
	* @return list of strings with movie names
	**/
	getMoviesNames(movies: Object[]): string{
		let moviesList = this.movieHelper.getMoviesNames(movies).join().slice(0,31);
		return `${moviesList}...`;
	}

	/**
	* Using a double number, cast to 2 digits percent
	* @param {value} double to be cast 
	* @return two digits percent
	**/
	castFloatPercent(value: number): string{
		return this.peopleHelper.castFloatPercet(value);
	}

}
