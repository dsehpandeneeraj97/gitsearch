import { Injectable } from '@angular/core';
import {Api} from './api';
  import { from, Observable } from 'rxjs';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /*Initialize http with HttpClient*/
  searchResult;
  constructor(private http:HttpClient ) { }
/*getApi() fetches the data from the URL by http get method*/
  getApi():Observable<Array<Api>>{
    /*Authenticating the url with access token key*/
    const options={
      headers: new HttpHeaders({'Authorization':'Bearer FYTe9u7kqq2_MTTjQyAG',
      'Content-Type':'application/json; charset=utf-8'})
    };
    return this.http.get<Array<Api>>('https://gitlab.stackroute.in/api/v4/projects',options);
  }
  getSearchApi(searchQuery):Observable<Array<Api>>{
    /*Authenticating the url with access token key*/
    const options={
      headers: new HttpHeaders({'Authorization':'Bearer FYTe9u7kqq2_MTTjQyAG',
      'Content-Type':'application/js;'})
    };
    return this.http.get<Array<Api>>('https://gitlab.stackroute.in/api/v4/search?scope=projects&search='+searchQuery,options); 
  }
}
