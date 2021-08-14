export class Vehicle {

 _id: string;
 //make: string;
 //year: string;
 //color: string;
 price: number;
 //mileage: number;
 sunRoof: boolean | null | string;
 fourWheelDrive: boolean | null | string;
 lowMiles: boolean | null | string;
 powerWindows: boolean | null | string;
 navigation: boolean | null | string;
 heatedSeats: boolean | null | string;

  constructor(
    public make: string,
    public year: string,
    public color: string,
    public mileage: string,
  ) { }

}
