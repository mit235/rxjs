import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusobsComponent } from './cusobs.component';

describe('CusobsComponent', () => {
  let component: CusobsComponent;
  let fixture: ComponentFixture<CusobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
