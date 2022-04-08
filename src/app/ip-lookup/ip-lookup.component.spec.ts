import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpLookupComponent } from './ip-lookup.component';

describe('IpLookupComponent', () => {
  let component: IpLookupComponent;
  let fixture: ComponentFixture<IpLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
