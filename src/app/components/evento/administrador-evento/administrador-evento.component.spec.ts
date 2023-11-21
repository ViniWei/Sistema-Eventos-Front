import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministradorEventoComponent } from './administrador-evento.component';

describe('AdministradorEventoComponent', () => {
  let component: AdministradorEventoComponent;
  let fixture: ComponentFixture<AdministradorEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorEventoComponent]
    });
    fixture = TestBed.createComponent(AdministradorEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
