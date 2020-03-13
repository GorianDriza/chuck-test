import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';
import {NgRedux} from '@angular-redux/store';

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
export class CategoryService {

  constructor(
    private http: HttpClient,
    private ngRedux: NgRedux<any>
  ) {
  }

  getListOfCategories(): Subscription {
    return this.http.get(environment.url + '/jokes/categories', requestOptions).pipe(
      tap(
        (data) => this.ngRedux.dispatch({type: 'GET_CATEGORIES', category: data}),
        (error) => this.ngRedux.dispatch({type: 'GET_CATEGORIES_ERROR'})
      )
    ).subscribe();
  }
}
