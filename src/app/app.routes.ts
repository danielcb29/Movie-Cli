import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
	{path: '', component: MoviesComponent},
	{path: 'movies/:filter', component: MoviesComponent},
	{path: 'movie/:id', component: MovieDetailComponent},
	{path: 'people', component: PeopleComponent},
	{path: 'actor/:id', component: PeopleDetailComponent},
	{path: 'about-me', component: AboutMeComponent},
	{path: '404', component: NotFoundComponent},
	{path: '**', redirectTo: '404'},

];