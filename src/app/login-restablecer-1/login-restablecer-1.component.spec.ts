import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRestablecer1Component } from './login-restablecer-1.component';

describe('LoginRestablecer1Component', () => {
  let component: LoginRestablecer1Component;
  let fixture: ComponentFixture<LoginRestablecer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRestablecer1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRestablecer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
