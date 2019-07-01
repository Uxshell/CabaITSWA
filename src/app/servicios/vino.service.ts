import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VinoService {
  
  constructor(private http:HttpClient) { 
    
    console.log('Servicio listo');
  
  }
  getWines(){
    
    return this.http.get('http://107.170.85.79:8080/api/productos?page=1&limit=100');
    
  }
}
