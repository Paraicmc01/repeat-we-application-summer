import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-whiskey-list',
  templateUrl: './whiskey-list.component.html',
  styleUrls: ['./whiskey-list.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class WhiskeyListComponent implements OnInit {

  Whiskey:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetWhiskeys().subscribe(res => {
      console.log(res)
      this.Whiskey =res;
    });    
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteWhiskey(id).subscribe(res => {
        this.Whiskey =res;
      })
        window.location.reload()
      
    }
  }

}
