import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	baseUrl: string = "http://image.tmdb.org/t/p/w300/";
	moviesList = [];
	moviesUpcoming = [];
	title: string = "";

	constructor(
		private movieService: MovieService,
		private router: Router, 
  		private route: ActivatedRoute,
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
					});		
					break;

				case "now_playing":
					this.movieService.getNowPlaying().subscribe(response => {
						this.moviesList = response;
						this.title = "Now Playing Movies!";			
					});
					break;				
				
				case "upcoming":
					this.movieService.getUpcoming().subscribe(response => {
						this.moviesList = this.moviesUpcoming;
						this.title = "Upcoming Movies!";	
					})
					break;				

				default:
					this.movieService.getPopular().subscribe(response => {
						this.moviesList = response;
						this.title = "Popular Movies!";
					});	
					break;
			}
		});
	}

	getImgUrl(src: string): string {
		return `${this.baseUrl}${src}`;
	}

	getGenreNames(ids: number[]){
		return this.movieService.getGenresName(ids);
	}

}
