import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-vehicle-search-form',
  templateUrl: './vehicle-search-form.component.html',
  styleUrls: ['./vehicle-search-form.component.css']
})
export class VehicleSearchFormComponent implements OnInit {

  vehicles: Vehicle[] = [];
  filteredVehicles: Vehicle[] = [];
  yearOptions: string[] = [];
  makeOptions: string[] = [];
  colorOptions: string[] = [];
  mileageOptions: string[] = [];
  sunRoofOptions: string[] = [];
  fWDOptions: string[] = [];
  lowMilesOptions: string[] = [];
  powerWindowOptions: string[] = [];
  navigationOptions: string[] = [];
  heatedSeatsOptions: string[] = [];
  readonly defaultAllValue: string = '--All--';

  submitted = false;

  private _model = new Vehicle(this.defaultAllValue, this.defaultAllValue, this.defaultAllValue, this.defaultAllValue);
    public get model() {
        return this._model;
    }
    public set model(value) {
        this._model = value;
    }

  
  //searchTerm: string ="";

constructor(private vehicleService: VehicleService) {
  
  this.model.sunRoof = this.defaultAllValue;
  this.model.fourWheelDrive = this.defaultAllValue;
  this.model.lowMiles = this.defaultAllValue;
  this.model.powerWindows = this.defaultAllValue;
  this.model.navigation = this.defaultAllValue;
  this.model.heatedSeats = this.defaultAllValue;
}

  ngOnInit() {
    this.getVehicles();
    console.log('get Vehicles API called');
  }

  getVehicles(): void {

    this.vehicleService.getVehicles()
      .subscribe(vehicles => {
        this.vehicles = vehicles;
        this.yearOptions = this.getYearOptions(1886);
        this.yearOptions.unshift(this.defaultAllValue);
        this.makeOptions = Array.from(new Set(vehicles.map(({ make }) => make))).sort(); //TODO: Get full range of dates
        this.makeOptions.unshift(this.defaultAllValue);
        this.colorOptions = Array.from(['Red', 'White', 'Gray', 'Silver', 'Black']).sort();
        this.colorOptions.unshift(this.defaultAllValue);
        this.mileageOptions = Array.from([5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000]).map(String);
        this.mileageOptions.unshift(this.defaultAllValue);
        this.sunRoofOptions = Array.from(['Yes', 'No']);
        this.sunRoofOptions.unshift(this.defaultAllValue);
        this.fWDOptions = Array.from(['Yes', 'No']);
        this.fWDOptions.unshift(this.defaultAllValue);
        this.lowMilesOptions = Array.from(['Yes', 'No']);
        this.lowMilesOptions.unshift(this.defaultAllValue);
        this.navigationOptions = Array.from(['Yes', 'No']);
        this.navigationOptions.unshift(this.defaultAllValue);
        this.heatedSeatsOptions = Array.from(['Yes', 'No']);
        this.heatedSeatsOptions.unshift(this.defaultAllValue);
        this.powerWindowOptions = Array.from(['Yes', 'No']);
        this.powerWindowOptions.unshift(this.defaultAllValue);
        
        
      });

  }

  //Get Years for options TODO:
  getYearOptions(startYear): string[] {

    var currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;

  }

  onNgModelChange(e) { // here e is a boolean, true if checked, otherwise false
    if (e) {
      // do something here
    }
  }


  onSubmit(vehicleForm: NgForm) {

    this.submitted = true;
    this.filteredVehicles = this.vehicles;

    if (vehicleForm.value.make != this.defaultAllValue) {
      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.make == vehicleForm.value.make
      );
    }

    if (vehicleForm.value.mileage != this.defaultAllValue) {
      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.mileage <= vehicleForm.value.mileage
      );
    }

    if (vehicleForm.value.year != this.defaultAllValue) {
      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.year == vehicleForm.value.year
      );
    }

    if (vehicleForm.value.color != this.defaultAllValue) {
      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.color == vehicleForm.value.color
      );
    }

    if (vehicleForm.value.sunroof != this.defaultAllValue) {
      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.sunRoof == (vehicleForm.value.sunroof == "Yes") ? true : false
      );
    }

    if (vehicleForm.value.fwd != this.defaultAllValue) {

      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.fourWheelDrive == (vehicleForm.value.fwd == "Yes") ? true : false
      );
    }

    if (vehicleForm.value.lowmiles != this.defaultAllValue) {

      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.lowMiles == (vehicleForm.value.lowmiles == "Yes") ? true : false
      );

    }

    if (vehicleForm.value.pwindows != this.defaultAllValue) {

      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.powerWindows == (vehicleForm.value.pwindows == "Yes") ? true : false
      );

    }

    if (vehicleForm.value.seats != this.defaultAllValue) {

      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.heatedSeats == (vehicleForm.value.seats == "Yes") ? true : false
      );

    }

    if (vehicleForm.value.navigation != this.defaultAllValue) {

      this.filteredVehicles = this.filteredVehicles.filter(
        (vehicle) => vehicle.navigation == (vehicleForm.value.navigation == "Yes") ? true : false
      );

    }
  }

}
