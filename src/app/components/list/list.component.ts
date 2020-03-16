import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';
import {ListFactService} from '../../shared/services/list-fact.service';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  selectedCat: boolean;

  constructor(
    private route: ActivatedRoute,
    private listFactsService: ListFactService,
    private ngRedux: NgRedux<any>
  ) {
    this.route.params.subscribe((param) => {
      if (param && param.name) { this.listFactsService.getListOfFacts(param.name); }
    });
  }

  ngOnInit() {
    const factList = this.ngRedux.getState();
    console.log(factList);
  }

}
