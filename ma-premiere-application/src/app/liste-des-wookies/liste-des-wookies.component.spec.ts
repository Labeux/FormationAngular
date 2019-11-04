import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesWookiesComponent } from './liste-des-wookies.component';

describe('ListeDesWookiesComponent', () => {
  let component: ListeDesWookiesComponent;
  let fixture: ComponentFixture<ListeDesWookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesWookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesWookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
