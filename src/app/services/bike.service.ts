import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {Bike} from "../bike";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes(){
    return this.http.get("http://localhost:8080/api/v1/bikes");
  }

  getBike(id:number){
    return this.http.get(`http://localhost:8080/api/v1/bikes/${id}`);
  }

  createBikeRegistration(bike:any){
    console.log(bike);
      let body = JSON.stringify(bike);
      return this.http.post("http://localhost:8080/api/v1/bikes",body,httpOptions);
  }
}
