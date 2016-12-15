import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieDetailService } from './movie-detail.service';
import { AppHelperService } from '../app.helper';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

	movie: Object = {};
	title: string = "Movie Detail!"

	constructor(
		private movieDetailService: MovieDetailService,
		private router: Router, 
  		private route: ActivatedRoute,
  		private appHelper: AppHelperService
  		) { }

	ngOnInit() {
		this.route.params.subscribe((param: any) => {
			let id = param['id'];
			this.movieDetailService.getMovieDetail(id).subscribe(response => {
				this.movie = response;
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
}
