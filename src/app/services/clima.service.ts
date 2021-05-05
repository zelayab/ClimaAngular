import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key = '{api_key}';
  url = 'https://api.openweathermap.org/data/2.5/weather?'

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url  + '&q=' + ciudad + '&appid=' + this.key;
    console.log(URL)
    return this.http.get(URL)
  }
}

