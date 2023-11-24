import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apikey = 'dccafb72ba7973347ed98a93621801b4';
  constructor(private http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(
      `api.openweathermap.org/data/2.5/weather?q=${cityName}&unit=metric&mode=json&api=${this.apikey}`,
      {}
    );
  }
}
