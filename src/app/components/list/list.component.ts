import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListFactService} from '../../shared/services/list-fact.service';
import {NgRedux} from '@angular-redux/store';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import * as _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  fetchedFacts = [];
  favoriteFacts = [];
  param: any;

  constructor(
    private route: ActivatedRoute,
    private listFactsService: ListFactService,
    private ngRedux: NgRedux<any>
  ) {
    this.route.params.subscribe((param) => {
      this.param = param;
      if (param && param.name) {
        this.listFactsService.getListOfFacts(param.name);
      }
    });
  }

  ngOnInit() {
    this.ngRedux.subscribe(() => {
      const factList = this.ngRedux.getState();
      this.fetchedFacts = this.filterFacts(factList);
    });
  }

  filterFacts(factList) {
    let facts = [];
    if (this.favoriteFacts && this.favoriteFacts.length > 0) {
      facts = _.differenceBy(factList.facts, this.favoriteFacts, 'id');
    } else {
      facts = factList.facts;
    }
    return facts;
  }

  addToFavorite(fact: any) {
    this.favoriteFacts.push(fact);
    if (this.param && this.param.name) {
      this.listFactsService.getListOfFacts(this.param.name);
    }
  }

  removeFromArray(fact: any) {
    this.favoriteFacts = this.favoriteFacts.filter((favorite) => favorite.id !== fact.id);
    if (this.param && this.param.name) {
      this.listFactsService.getListOfFacts(this.param.name);
    }
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
