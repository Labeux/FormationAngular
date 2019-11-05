import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WookieEditionComponent } from './wookie-edition.component';

describe('WookieEditionComponent', () => {
  let component: WookieEditionComponent;
  let fixture: ComponentFixture<WookieEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WookieEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
