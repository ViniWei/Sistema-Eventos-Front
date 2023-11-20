import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrganizadorComponent } from './login-organizador.component';

describe('LoginOrganizadorComponent', () => {
  let component: LoginOrganizadorComponent;
  let fixture: ComponentFixture<LoginOrganizadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginOrganizadorComponent]
    });
    fixture = TestBed.createComponent(LoginOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
