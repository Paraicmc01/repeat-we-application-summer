import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-list-drinks',
  templateUrl: './list-drinks.component.html',
  styleUrls: ['./list-drinks.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ListDrinksComponent implements OnInit {

  Drink:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetDrinks().subscribe(res => {
      console.log(res)
      this.Drink =res;
    });    
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteDrink(id).subscribe(res => {
        this.Drink =res;
      })
        window.location.reload()
      
    }
  }
  
}

