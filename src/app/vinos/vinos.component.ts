import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VinoService} from '../servicios/vino.service';
@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.css']
})
export class VinosComponent  {
  
   misvinos: any[]=[];

  constructor( private wine:VinoService) {
    this.wine.getWines().subscribe((data:any)=>{
      console.log(data.data);
      this.misvinos = data.data;
      
    })
   }

  ngOnInit() {
  }

}
