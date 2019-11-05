import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WookieResumeComponent } from './wookie-resume.component';

describe('WookieResumeComponent', () => {
  let component: WookieResumeComponent;
  let fixture: ComponentFixture<WookieResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WookieResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
