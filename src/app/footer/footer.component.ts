import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies/movie.service';


@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	moviesUpcoming = []

	constructor(private movieService: MovieService) { }

	ngOnInit() {
	  	this.movieService.getUpcoming().subscribe(response => {
			this.moviesUpcoming = response;
		})
	}

}
