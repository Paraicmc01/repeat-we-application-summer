import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDrinkComponent } from './components/add-drink/add-drink.component';
import { ListDrinksComponent } from './components/list-drinks/list-drinks.component';
import { DrinksDetailsComponent } from './components/drinks-details/drinks-details.component';
import { OpenDrinkListComponent } from './components/open-drink-list/open-drink-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhiskeyListComponent } from './components/whiskey-list/whiskey-list.component';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { AddCocktailComponent } from './components/add-cocktail/add-cocktail.component';
import { AddWhiskeyComponent } from './components/add-whiskey/add-whiskey.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { JwtModule } from '@auth0/angular-jwt';
// import { authInterceptorProviders } from './_helpers/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    AddDrinkComponent,
    ListDrinksComponent,
    DrinksDetailsComponent,
    OpenDrinkListComponent,
    WhiskeyListComponent,
    CocktailsListComponent,
    AddCocktailComponent,
    AddWhiskeyComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
