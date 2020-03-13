import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../shared/services/category.service';
import {NgRedux, select} from '@angular-redux/store';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @select('stateProp') stateProp$;

  constructor(
    private categoryService: CategoryService,
    private ngRedux: NgRedux<any>
  ) {
    this.categoryService.getListOfCategories();
  }

  ngOnInit() {
    const categoryList = this.ngRedux.getState();
    console.log(categoryList);
  }


}
