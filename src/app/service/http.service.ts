import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  key:string = '';
  host = 'https://api.the-odds-api.com';
  useMyKey: boolean = false;
  mySeries = "";
  myRegion = "";
  urlAPI = "";
  call = "";
  response = "";
  showResult = false;
  loading = null;
  // https://api.the-odds-api.com/v3/odds/?apiKey=fcb1bb836f62249fc048b1c0df79f0cc&sport=soccer_epl&region=uk


  constructor(private http: HttpClient) { }



  /** GET match from the server */
  getMatch() {
    if (this.useMyKey) {
      this.key = 'fcb1bb836f62249fc048b1c0df79f0cc';
    }
    this.urlAPI = '/v3/odds/?apiKey=' + this.key + '&sport=' + this.mySeries + '&region=' + this.myRegion;
    this.call = this.host + this.urlAPI;
    return this.http.get<any>(this.call);

  }

  public setSeries(series: string) {
    this.mySeries = series;
    return this.mySeries
  }

  public setRegion(region: string) {
    this.myRegion = region;
    return this.myRegion
  }
}

