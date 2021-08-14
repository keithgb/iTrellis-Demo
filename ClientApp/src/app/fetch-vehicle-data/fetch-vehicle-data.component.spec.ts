import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchVehicleDataComponent } from './fetch-vehicle-data.component';

describe('FetchVehicleDataComponent', () => {
  let component: FetchVehicleDataComponent;
  let fixture: ComponentFixture<FetchVehicleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchVehicleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchVehicleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
