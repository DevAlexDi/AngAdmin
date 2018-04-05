import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsTypeComponent } from './ships-type.component';

describe('ShipsTypeComponent', () => {
  let component: ShipsTypeComponent;
  let fixture: ComponentFixture<ShipsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
