import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetosCSSComponent } from './objetos-css.component';

describe('ObjetosCSSComponent', () => {
  let component: ObjetosCSSComponent;
  let fixture: ComponentFixture<ObjetosCSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetosCSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetosCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
