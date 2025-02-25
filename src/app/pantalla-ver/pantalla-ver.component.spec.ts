import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaVerComponent } from './pantalla-ver.component';

describe('PantallaVerComponent', () => {
  let component: PantallaVerComponent;
  let fixture: ComponentFixture<PantallaVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaVerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
