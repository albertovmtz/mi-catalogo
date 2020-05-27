import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAutosComponent } from './detalles-autos.component';

describe('DetallesAutosComponent', () => {
  let component: DetallesAutosComponent;
  let fixture: ComponentFixture<DetallesAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
