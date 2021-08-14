import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private vehicleUrl = 'api/vehicle';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  /** GET vehicles from the server */
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehicleUrl)
      .pipe(
       // tap(_ => this.log('fetched vehicles')),
        catchError(this.handleError<Vehicle[]>('getVehicles', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
