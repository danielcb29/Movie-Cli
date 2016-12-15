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
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { MovieService } from './movies/movie.service';
import { MovieDetailService } from './movie-detail/movie-detail.service';
import { PeopleService } from './people/people.service';

import { AppHelperService } from './app.helper';
import { MovieHelperService } from './movies/movie.helper';
import { PeopleHelperService } from './people/people.helper';
import { PeopleDetailService } from './people-detail/people-detail.service';
import { SearchService } from './search/search.service';

import {CapitalizePipe} from "./pipes/capitalize.pipe";
import {OrderBy} from "./pipes/order-by.pipe";
import {SafePipe} from "./pipes/safe.pipe";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MoviesComponent,
    PeopleComponent,
    MenuComponent,
    MovieDetailComponent,
    PeopleDetailComponent,
    CapitalizePipe,
    AboutMeComponent,
    NotFoundComponent,
    OrderBy,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES, {useHash: false}),
  ],
  providers: [
    MovieService, 
    MovieDetailService, 
    PeopleService, 
    AppHelperService,
    MovieHelperService,
    PeopleHelperService,
    PeopleDetailService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
