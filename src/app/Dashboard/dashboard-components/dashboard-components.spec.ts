import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponents } from './dashboard-components';

describe('DashboardComponents', () => {
  let component: DashboardComponents;
  let fixture: ComponentFixture<DashboardComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
