import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgRedux} from '@angular-redux/store';
import {Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

const headerDict = {
  'x-rapidapi-host': environment.host,
  'x-rapidapi-key': environment.key,
  accept: 'application/json'
};

const requestOptions = {
  headers: new HttpHeaders(headerDict)
};

@Injectable({
  providedIn: 'root'
})
export class ListFactService {

  constructor(
    private http: HttpClient,
    private ngRedux: NgRedux<any>
  ) { }

  getListOfFacts(param): Subscription {
    return this.http.get(environment.url + '/jokes/search?query=' + param, requestOptions).pipe(
      tap(
        (data) => this.ngRedux.dispatch({type: 'GET_FACTS', facts: data}),
        (error) => this.ngRedux.dispatch({type: 'GET_FACTS_ERROR'})
      )
    ).subscribe();
  }

}
