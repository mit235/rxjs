import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulkComponent } from './pulk.component';

describe('PulkComponent', () => {
  let component: PulkComponent;
  let fixture: ComponentFixture<PulkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
