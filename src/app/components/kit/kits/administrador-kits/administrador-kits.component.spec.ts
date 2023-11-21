import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorKitsComponent } from './administrador-kits.component';

describe('AdministradorKitsComponent', () => {
  let component: AdministradorKitsComponent;
  let fixture: ComponentFixture<AdministradorKitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorKitsComponent]
    });
    fixture = TestBed.createComponent(AdministradorKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
