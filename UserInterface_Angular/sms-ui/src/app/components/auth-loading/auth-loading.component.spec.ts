import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoadingComponent } from './auth-loading.component';

describe('AuthLoadingComponent', () => {
  let component: AuthLoadingComponent;
  let fixture: ComponentFixture<AuthLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
