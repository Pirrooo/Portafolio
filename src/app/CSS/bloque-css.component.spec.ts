import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueCSSComponent } from './bloque-css.component';

describe('BloqueCSSComponent', () => {
  let component: BloqueCSSComponent;
  let fixture: ComponentFixture<BloqueCSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueCSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
