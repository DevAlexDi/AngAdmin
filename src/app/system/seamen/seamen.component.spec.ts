import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeamenComponent } from './seamen.component';

describe('SeamenComponent', () => {
  let component: SeamenComponent;
  let fixture: ComponentFixture<SeamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
