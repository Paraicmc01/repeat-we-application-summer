import { Injectable } from '@angular/core';
import { Drink, Whiskey } from './Drink';
import { Cocktail } from './Drink';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
 
export class CrudService {
 
  // Node/Express API
  REST_API: string = 'http://localhost:3001/drink/';
  REST_APIc: string = 'http://localhost:3001/cocktail/';
  REST_APIw: string = 'http://localhost:3001/whiskey/';


 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  router: any;
 
  constructor(private httpClient: HttpClient) { }
 
   
   AddDrink(data: Drink): Observable<any> {
     let API_URL = `${this.REST_API}/add-drink`;
     return this.httpClient.post(API_URL, data)
       .pipe(
         catchError(this.handleError)
       )
   }
 
  // Get all objects
  GetDrinks():  Observable<any> {
    return this.httpClient.get('http://localhost:3001/drink/1',{ headers: this.httpHeaders })
    .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

   
  // Delete
  deleteDrink(id:any): Observable<any> {
    return this.httpClient.delete(`http://localhost:3001/drink/${id}`, { headers: this.httpHeaders})
    .pipe(map((res: any) => {
      return res || {}
    }),
    catchError(this.handleError)
  )
}

 
  // Update
  updateDrink(id:any, data:any): Observable<any> {
    console.log(data)
    return this.httpClient.put(`http://localhost:3001/drink/${id}/${data}`, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }




  AddCocktail(data: Cocktail): Observable<any> {
    let API_URL = `${this.REST_APIc}/add-drink`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

 // Get all objects
 GetCocktails():  Observable<any> {
   return this.httpClient.get('http://localhost:3001/cocktail/1',{ headers: this.httpHeaders })
   .pipe(map((res: any) => {
       return res || {}
     }),
     catchError(this.handleError)
   )
 }

  
 // Delete
 deleteCocktail(id:any): Observable<any> {
   return this.httpClient.delete(`http://localhost:3001/cocktail/${id}`, { headers: this.httpHeaders})
   .pipe(map((res: any) => {
     return res || {}
   }),
   catchError(this.handleError)
 )
}


 // Update
 updateCocktail(id:any, data:any): Observable<any> {
   console.log(data)
   return this.httpClient.put(`http://localhost:3001/cocktail/${id}/${data}`, { headers: this.httpHeaders })
     .pipe(
       catchError(this.handleError)
     )
 }



 AddWhiskey(data: Whiskey): Observable<any> {
  let API_URL = `${this.REST_APIw}/add-drink`;
  return this.httpClient.post(API_URL, data)
    .pipe(
      catchError(this.handleError)
    )
}

// Get all objects
GetWhiskeys():  Observable<any> {
 return this.httpClient.get('http://localhost:3001/whiskey/1',{ headers: this.httpHeaders })
 .pipe(map((res: any) => {
     return res || {}
   }),
   catchError(this.handleError)
 )
}


// Delete
deleteWhiskey(id:any): Observable<any> {
 return this.httpClient.delete(`http://localhost:3001/whiskey/${id}`, { headers: this.httpHeaders})
 .pipe(map((res: any) => {
   return res || {}
 }),
 catchError(this.handleError)
)
}


// Update
updateWhiskey(id:any, data:any): Observable<any> {
 console.log(data)
 return this.httpClient.put(`http://localhost:3001/whiskey/${id}/${data}`, { headers: this.httpHeaders })
   .pipe(
     catchError(this.handleError)
   )
}
 
 
  // Error 
  private handleError(error: Response | any) {
    let errorMessage = '';
    if (error.status == 0) {
      // Handle client error
      errorMessage = error.error.message;
      this.router.navigate(['/error'])
    } 
    console.log(errorMessage);
    return throwError(errorMessage);
  }
 
}