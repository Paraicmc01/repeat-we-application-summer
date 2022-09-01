import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class CocktailsListComponent implements OnInit {

  Cocktail:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetCocktails().subscribe(res => {
      console.log(res)
      this.Cocktail =res;
    });    
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteCocktail(id).subscribe(res => {
        this.Cocktail =res;
      })
        window.location.reload()
      
    }
  }

}
