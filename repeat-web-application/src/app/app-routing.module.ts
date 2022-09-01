import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDrinkComponent } from './components/add-drink/add-drink.component';
import { DrinksDetailsComponent } from './components/drinks-details/drinks-details.component';
import { ListDrinksComponent } from './components/list-drinks/list-drinks.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login-page' },    // lets logged in users have access
  { path: 'list-drinks', component: ListDrinksComponent, /*canActivate: [ AuthGuardService ]*/  }, 
  { path: 'add-drink', component: AddDrinkComponent, /*canActivate: [ AuthGuardService ]*/ },
  { path: 'edit-drink/:id', component: DrinksDetailsComponent, /*canActivate: [ AuthGuardService ]*/ }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
