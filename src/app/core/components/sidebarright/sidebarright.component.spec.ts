import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarrightComponent } from './sidebarright.component';

describe('SidebarrightComponent', () => {
  let component: SidebarrightComponent;
  let fixture: ComponentFixture<SidebarrightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarrightComponent]
    });
    fixture = TestBed.createComponent(SidebarrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
