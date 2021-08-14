import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { VehicledataComponent } from './vehicledata/vehicledata.component';
import { FetchVehicleDataComponent } from './fetch-vehicle-data/fetch-vehicle-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleSearchFormComponent } from './vehicle-search-form/vehicle-search-form.component';
import { SortPipe } from './sort.pipe';
import { BooleanLabelPipe } from './boolean-label.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VehicledataComponent,
    FetchVehicleDataComponent,
    VehicleSearchFormComponent,
    SortPipe,
    BooleanLabelPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'vehicledata', component: VehicledataComponent },
      { path: 'fetch-vehicle-data', component: FetchVehicleDataComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
