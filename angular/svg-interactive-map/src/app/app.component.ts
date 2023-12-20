import { Component, OnInit , HostListener} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Properties } from './properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'svg-interactive-map';

  readonly ROOT_URL = 'http://api.worldbank.org/v2/country/'

  constructor(private _http:HttpClient) { }
  
  properties: any;
  result: any;
  result2: any;
  result3: any;
  result4: any;
  str: any;

  @HostListener('click', ['$event.target.id'])
  handleClick(id: string) {
    if(id === '') {
      return null;
    }
    else {
      this._http.get(this.ROOT_URL + id + "?format=json").subscribe(res => {
      this.properties = res;
      
      this.result = JSON.stringify(this.properties[1]);
      this.result2 = Object.values(this.result);
      this.result3 = this.result2.join('');
      this.result4 = this.result3.split('},');
      });
    }
  }
}