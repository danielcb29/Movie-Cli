import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from './movie.service';
import { AppHelperService } from '../app.helper';
import { MovieHelperService } from './movie.helper';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	moviesList = [];
	moviesUpcoming = [];
	title: string = "";
	order: string = "";
	subtitle: string  ="";

	constructor(
		private movieService: MovieService,
		private router: Router, 
  		private route: ActivatedRoute,
  		private appHelper: AppHelperService,
  		private movieHelper: MovieHelperService
  		) { }

	ngOnInit() {

		this.movieService.getUpcoming().subscribe(response => {
			this.moviesUpcoming = response;
		});

		this.route.params.subscribe((param: any) => {
			switch (param['filter']) {
				case "top_rated":
					this.movieService.getTopRated().subscribe(response => {
						this.moviesList = response;
						this.title = "Top Rated Movies!";
						this.order = "vote_average";
						this.subtitle = "ordered by vote average...";
					});		
					break;

				case "now_playing":
					this.movieService.getNowPlaying().subscribe(response => {
						this.moviesList = response;
						this.title = "Now Playing Movies!";
						this.order = "vote_average";
						this.subtitle = "ordered by vote average...";		
					});
					break;				
				
				case "upcoming":
					this.movieService.getUpcoming().subscribe(response => {
						this.moviesList = this.moviesUpcoming;
						this.title = "Upcoming Movies!";
						this.order = "release_date";
						this.subtitle = "ordered by release date...";	
					})
					break;				

				default:
					this.movieService.getPopular().subscribe(response => {
						this.moviesList = response;
						this.title = "Popular Movies!";
						this.order = "release_date";
						this.subtitle = "ordered by release date...";
					});	
					break;
			}
		});
	}

	getImgUrl(src: string): string {
		return this.appHelper.getImgUrl(src);
	}

	getGenreNames(ids: number[]){
		return this.movieHelper.getGenresName(ids);
	}

}
