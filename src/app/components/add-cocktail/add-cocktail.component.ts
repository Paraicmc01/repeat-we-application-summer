import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-cocktail',
  templateUrl: './add-cocktail.component.html',
  styleUrls: ['./add-cocktail.component.css']
})
export class AddCocktailComponent implements OnInit {

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private http: HttpClient,
    private crudService: CrudService
  ) { 
    this.form = this.formBuilder.group({
      name: [''],
      glassType: [''],
      price: [''],
      alcohol: ['']
    })
  }
 
  ngOnInit() { }
 
  onSubmit() {

    var formData: any = new FormData();
    formData.append("name", this.form.get('name')?.value);
    formData.append("glassType", this.form.get('glassType')?.value);
    formData.append("price", this.form.get('price')?.value);
    formData.append("alcohol", this.form.get('alcohol')?.value);
    formData.append("searchBy", 1);


    console.log(formData)

     fetch("http://localhost:3001/cocktail", {
       method: "POST",
        body: formData,  
      }).then(()=>{
        window.location.reload()
      })

}

}