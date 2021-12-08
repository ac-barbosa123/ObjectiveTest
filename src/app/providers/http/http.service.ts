import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

   
  public get(url: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    url = environment.baseUrl + url;
    return this.http.get(url, { headers });
  }

}
