import { TestBed } from '@angular/core/testing';

import { ListFactService } from './list-fact.service';

describe('ListFactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListFactService = TestBed.get(ListFactService);
    expect(service).toBeTruthy();
  });
});
