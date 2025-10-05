import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicket } from './user-ticket';

describe('UserTicket', () => {
  let component: UserTicket;
  let fixture: ComponentFixture<UserTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTicket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTicket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
