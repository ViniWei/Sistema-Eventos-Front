import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtuantesComponent } from './atuantes.component';

describe('AtuantesComponent', () => {
  let component: AtuantesComponent;
  let fixture: ComponentFixture<AtuantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtuantesComponent]
    });
    fixture = TestBed.createComponent(AtuantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
