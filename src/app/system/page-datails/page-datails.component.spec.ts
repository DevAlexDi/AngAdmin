import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDatailsComponent } from './page-datails.component';

describe('PageDatailsComponent', () => {
  let component: PageDatailsComponent;
  let fixture: ComponentFixture<PageDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
