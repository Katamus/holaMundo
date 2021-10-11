import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAgregarComponent } from './usuarios-agregar.component';

describe('UsuariosAgregarComponent', () => {
  let component: UsuariosAgregarComponent;
  let fixture: ComponentFixture<UsuariosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
