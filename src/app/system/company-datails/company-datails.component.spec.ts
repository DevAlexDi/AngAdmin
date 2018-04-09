import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDatailsComponent } from './company-datails.component';

describe('CompanyDatailsComponent', () => {
  let component: CompanyDatailsComponent;
  let fixture: ComponentFixture<CompanyDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
