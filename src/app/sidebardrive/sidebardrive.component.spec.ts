import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardriveComponent } from './sidebardrive.component';

describe('SidebardriveComponent', () => {
  let component: SidebardriveComponent;
  let fixture: ComponentFixture<SidebardriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebardriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebardriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
