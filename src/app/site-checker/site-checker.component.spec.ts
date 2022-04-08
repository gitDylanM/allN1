import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCheckerComponent } from './site-checker.component';

describe('SiteCheckerComponent', () => {
  let component: SiteCheckerComponent;
  let fixture: ComponentFixture<SiteCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
