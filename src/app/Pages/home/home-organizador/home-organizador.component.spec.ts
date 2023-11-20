import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrganizadorComponent } from './home-organizador.component';

describe('HomeOrganizadorComponent', () => {
  let component: HomeOrganizadorComponent;
  let fixture: ComponentFixture<HomeOrganizadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOrganizadorComponent]
    });
    fixture = TestBed.createComponent(HomeOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
