import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorComponent } from './organizador.component';

describe('OrganizadorComponent', () => {
  let component: OrganizadorComponent;
  let fixture: ComponentFixture<OrganizadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizadorComponent]
    });
    fixture = TestBed.createComponent(OrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
