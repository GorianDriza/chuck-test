import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './components/home/home.component';
import {ListComponent} from './components/list/list.component';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {CategoryComponent} from './components/category/category.component';
import rootReducer from './shared/store/rootReducer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(rootReducer, {});
  }
}
