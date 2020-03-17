import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListFactService} from '../../shared/services/list-fact.service';
import {NgRedux} from '@angular-redux/store';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  fetchedFacts = [];
  favoriteFacts = [];
  test: any;

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
    this.ngRedux.subscribe(() => {
      const factList = this.ngRedux.getState();
      this.fetchedFacts = factList.facts;
    });
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
