import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	baseUrl: string = "http://image.tmdb.org/t/p/w300/";
	moviesPopular = [];
	moviesUpcoming = [];
	title: string = "";

	constructor(private movieService: MovieService) { }

	ngOnInit() {
		this.movieService.getPopular().subscribe(response => {
			this.moviesPopular = response;
			this.title = "Popular Movies!";
		});

		this.movieService.getUpcoming().subscribe(response => {
			this.moviesUpcoming = response;
		})
	}

	getImgUrl(src: string): string {
		return `${this.baseUrl}${src}`;
	}

	getGenreNames(ids: number[]){
		return this.movieService.getGenresName(ids);
	}

}
