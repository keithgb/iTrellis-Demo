import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { VehicleSearchFormComponent } from '../vehicle-search-form/vehicle-search-form.component';
import { VehicledataComponent } from './vehicledata.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatPseudoCheckbox, MatRippleModule } from '@angular/material/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatGridListModule, MatGridTile } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VehicledataComponent', () => {
  let component: VehicledataComponent;
  let fixture: ComponentFixture<VehicledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicledataComponent, VehicleSearchFormComponent,
        MatCardTitle, MatCardSubtitle, MatCardHeader, MatCheckbox, MatCardContent,
        MatCard
      ],
      imports: [FormsModule, MatInputModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatRippleModule, OverlayModule, HttpClientTestingModule, MatSelectModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
