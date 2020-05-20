import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
    selector: 'app-value',
    templateUrl: './value.component.html',
    styleUrls: ['./value.component.css']
})
/** value component*/
export class ValueComponent implements OnInit {
  values: any;
  /** value ctor */
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('https://localhost:44355/api/values').subscribe(respone => {
      this.values = respone;
    }, error => {
        console.log(error);
    });
  }
}

//export class FetchDataComponent {
//  public forecasts: WeatherForecast[];

//  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
//      this.forecasts = result;
//    }, error => console.error(error));
//  }
//}
