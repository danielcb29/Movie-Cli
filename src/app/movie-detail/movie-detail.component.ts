import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieDetailService } from './movie-detail.service';
import { AppHelperService } from '../app.helper';
import { MovieHelperService } from '../movies/movie.helper';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

	movie: Object = {};
	title: string = "Movie Detail!"
	video: Object = {};

	constructor(
		private movieDetailService: MovieDetailService,
		private router: Router, 
  		private route: ActivatedRoute,
  		private appHelper: AppHelperService,
  		private movieHelper: MovieHelperService
  		) { }

	/**
	* Initialize de movie detail component requesting movie information 
	* and the videos related of the movie.
	* Raise 404 if movie can't be found
	**/
	ngOnInit() {
		this.route.params.subscribe((param: any) => {
			let id = param['id'];
			this.movieDetailService.getMovieDetail(id).subscribe(response => {
				this.movie = response;
			}, err => {
				// If movie detail return error, raise 404
				this.router.navigate(['/404']);
			});
			this.movieDetailService.getMovieVideos(id).subscribe(response => {
				this.video = response[0];
			}, err => {
				// If movie videos return error, raise 404
				this.router.navigate(['/404']);
			});
		});


	}

	/**
	* Given a list of objects, return the property name of any object in other list
	* @param {list} List of objects to get name property
	* @return List of strings with name property of any object of list
	**/
	getNamesList(list: Object[]): string[]{
		return this.appHelper.getNamesList(list);
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
	* Get youtube embebed url for youtube id
	* @param {value} youtube id to be cast to youtube embebed url
	* @return youtube embeber url format
	**/
	getMovieVideoUrl(value: string):string{
		return this.movieHelper.getMovieVideoUrl(value);
	}
}
