import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { MenuComponent } from './menu/menu.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { MovieService } from './movies/movie.service';
import { MovieDetailService } from './movie-detail/movie-detail.service';
import { PeopleService } from './people/people.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MoviesComponent,
    PeopleComponent,
    MenuComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES, {useHash: false}),
  ],
  providers: [MovieService, MovieDetailService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
