import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../shared/services/category.service';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories = [];

  constructor(
    private categoryService: CategoryService,
    private ngRedux: NgRedux<any>
  ) {
    this.categoryService.getListOfCategories();
  }

  ngOnInit() {
    const categoryList = this.ngRedux.getState();
    if (categoryList.category) { this.categories = categoryList.category; }
  }


}
