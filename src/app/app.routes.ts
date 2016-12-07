import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaxboardComponent } from './taxboard/taxboard.component';


export const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'taxboard', component: TaxboardComponent},
	{path: 'taxboard/:id', component: TaxboardComponent}
];