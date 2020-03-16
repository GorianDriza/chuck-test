import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {animation} from './shared/animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animation]
})
export class AppComponent implements OnInit, OnDestroy {
  private navigation = new Subscription();
  showProgress = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.navigation.add(this.router.events.subscribe((event) => this._handleNavigationEvent(event)));
  }

  ngOnDestroy(): void {
    if (this.navigation) {
      this.navigation.unsubscribe();
    }
  }

  private _handleNavigationEvent(event) {
    if (event instanceof NavigationStart) {
      this.showProgress = true;
    }
    if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
      setTimeout(() => (this.showProgress = false), 300);
    }
  }

}
