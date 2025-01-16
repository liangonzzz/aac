import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCreacionComponent } from './pantalla-creacion.component';

describe('PantallaCreacionComponent', () => {
  let component: PantallaCreacionComponent;
  let fixture: ComponentFixture<PantallaCreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaCreacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
