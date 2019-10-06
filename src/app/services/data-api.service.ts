import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getAllHeroes(){
    const url_api = 'http://35.162.46.100/superheroes/';
    return this.http.get(url_api);
  }

}
