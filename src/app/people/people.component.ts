import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from './people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

	baseUrl: string = "http://image.tmdb.org/t/p/w300/";
	people = [];
	title = "Popular People!"

	constructor(
		private peopleService: PeopleService,
		private router: Router, 
		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		this.peopleService.getPopular().subscribe(response => {
			this.people = response;
		});

	}

	getImgUrl(src: string): string {
		return `${this.baseUrl}${src}`;
	}

}
