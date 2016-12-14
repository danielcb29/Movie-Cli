import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieDetailService } from './movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

	baseUrl: string = "http://image.tmdb.org/t/p/w300/";
	movie: Object = {};
	title: string = "Movie Detail!"

	constructor(
		private movieDetailService: MovieDetailService,
		private router: Router, 
  		private route: ActivatedRoute
  		) { }

	ngOnInit() {
		this.route.params.subscribe((param: any) => {
			let id = param['id'];
			this.movieDetailService.getMovieDetail(id).subscribe(response => {
				this.movie = response;
			});
		});
	}

	getNamesList(list: Object[]): string[]{
		let result: string[] = []
		if(list){
			for(let object of list){
				result.push(object['name']);
			}	
		}
		return result;
	}

	getImgUrl(src: string): string {
		return `${this.baseUrl}${src}`;
	}
}
