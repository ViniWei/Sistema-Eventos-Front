import { TestBed } from '@angular/core/testing';

import { AtuantesService } from './atuantes.service';

describe('AtuantesService', () => {
  let service: AtuantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtuantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
