import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCheckbox, MatFormField, MatGridList, MatGridTile, MatLabel, MatOption, MatPseudoCheckbox, MatRippleModule, MatSelect, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VehicleSearchFormComponent } from './vehicle-search-form.component';

describe('VehicleSearchFormComponent', () => {
  let component: VehicleSearchFormComponent;
  let fixture: ComponentFixture<VehicleSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleSearchFormComponent,
        MatCardTitle, MatCardSubtitle, MatCardHeader, MatCheckbox, MatCardContent, MatGridTile,
        MatGridList,MatCard,      ],
      imports: [FormsModule, MatRippleModule, OverlayModule, ObserversModule, HttpClientTestingModule, MatSelectModule, BrowserAnimationsModule],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
