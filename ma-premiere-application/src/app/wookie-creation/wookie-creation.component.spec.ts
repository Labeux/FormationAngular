import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WookieCreationComponent } from './wookie-creation.component';

describe('WookieCreationComponent', () => {
  let component: WookieCreationComponent;
  let fixture: ComponentFixture<WookieCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WookieCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
