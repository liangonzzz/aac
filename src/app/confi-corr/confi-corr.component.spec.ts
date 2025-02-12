import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiCorrComponent } from './confi-corr.component';

describe('ConfiCorrComponent', () => {
  let component: ConfiCorrComponent;
  let fixture: ComponentFixture<ConfiCorrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiCorrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiCorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
