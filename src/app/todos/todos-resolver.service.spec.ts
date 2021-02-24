import { TestBed } from '@angular/core/testing';

import { TodosResolverService } from './todos-resolver.service';

describe('TodosResolverService', () => {
  let service: TodosResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
