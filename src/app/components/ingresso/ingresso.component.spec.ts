import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoComponent } from './ingresso.component';

describe('IngressoComponent', () => {
  let component: IngressoComponent;
  let fixture: ComponentFixture<IngressoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngressoComponent]
    });
    fixture = TestBed.createComponent(IngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
