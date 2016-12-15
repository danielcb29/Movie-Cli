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

	ngOnInit() {
		this.route.params.subscribe((param: any) => {
			let id = param['id'];
			this.movieDetailService.getMovieDetail(id).subscribe(response => {
				this.movie = response;
			}, err => {
				this.router.navigate(['/404']);
			});
			this.movieDetailService.getMovieVideos(id).subscribe(response => {
				this.video = response[0];
				console.log(this.video);
			}, err => {
				this.router.navigate(['/404']);
			});
		});


	}

	getNamesList(list: Object[]): string[]{
		return this.appHelper.getNamesList(list);
	}

	getImgUrl(src: string): string {
		return this.appHelper.getImgUrl(src);
	}

	getMovieVideoUrl(value: string):string{
		return this.movieHelper.getMovieVideoUrl(value);
	}
}
