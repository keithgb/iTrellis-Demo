import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { VehicleService } from './vehicle.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterTestingModule],
    declarations: [
      AppComponent,
      NavMenuComponent,
      
    ]
  }));

  it('should be created', () => {
    const service: VehicleService = TestBed.get(VehicleService);
    expect(service).toBeTruthy();
  });
});
