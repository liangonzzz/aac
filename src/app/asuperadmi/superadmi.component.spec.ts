import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmiComponent } from './superadmi.component';

describe('SuperadmiComponent', () => {
  let component: SuperadmiComponent;
  let fixture: ComponentFixture<SuperadmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
