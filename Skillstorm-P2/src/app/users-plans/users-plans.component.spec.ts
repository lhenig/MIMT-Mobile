import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPlansComponent } from './users-plans.component';

describe('UsersPlansComponent', () => {
  let component: UsersPlansComponent;
  let fixture: ComponentFixture<UsersPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
