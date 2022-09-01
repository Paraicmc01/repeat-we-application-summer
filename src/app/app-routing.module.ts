import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDrinkComponent } from './components/add-drink/add-drink.component';
import { DrinksDetailsComponent } from './components/drinks-details/drinks-details.component';
import { ListDrinksComponent } from './components/list-drinks/list-drinks.component';
import { OpenDrinkListComponent } from './components/open-drink-list/open-drink-list.component';
import { WhiskeyListComponent } from './components/whiskey-list/whiskey-list.component';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { AddCocktailComponent } from './components/add-cocktail/add-cocktail.component';
import { AddWhiskeyComponent } from './components/add-whiskey/add-whiskey.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { RoleGuardGuard } from './core/guards/role-guard.guard';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },    // lets logged in users have access
  { path: 'list-drinks', component: ListDrinksComponent, /*canActivate: [ AuthGuardService, RoleGuardGuard ], data:{ expectedRoles:['customer', 'worker']}*/  }, 
  { path: 'edit-drink/:id', component: DrinksDetailsComponent, canActivate: [ AuthGuardService, RoleGuardGuard ], data:{ expectedRoles:['worker']} },
  { path: 'open-drink-list', component: OpenDrinkListComponent, /*canActivate: [ AuthGuardService ]*/ },
  { path: 'cocktails-list', component: CocktailsListComponent, /*canActivate: [ AuthGuardService ]*/ },
  { path: 'whiskey-list', component: WhiskeyListComponent, /*canActivate: [ AuthGuardService ]*/ },
  { path: 'add-cocktail', component: AddCocktailComponent, canActivate: [ AuthGuardService , RoleGuardGuard], data:{ expectedRoles:['worker']} },
  { path: 'add-drink', component: AddDrinkComponent, canActivate: [ AuthGuardService, RoleGuardGuard ], data:{ expectedRoles:['worker']} },
  { path: 'add-whiskey', component: AddWhiskeyComponent, canActivate: [ AuthGuardService, RoleGuardGuard ], data:{ expectedRoles:['worker']} },
{ path: 'login', component: LoginComponent,/* canActivate: [ AuthGuardService, RoleGuardGuard ], data:{ expectedRoles:['worker']}*/ }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
