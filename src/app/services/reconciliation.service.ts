import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Department } from '../models/department';
import { Observable } from 'rxjs';
import { DiscrepancyLocationDetails } from '../models/discrepancylocationdetails';
import { Items } from '../models/items';
@Injectable({
  providedIn: 'root'
})

export abstract class ReconciliationService {
  locationUrl = 'api/locations';
  departmentUrl = 'api/departments';
  itemtUrl = 'api/items';
  discrepancyLocationtUrl = 'api/discrepancyLocationDetails';
  abstract getLocations(): Observable<Location[]>;
  abstract getDepartments(): Observable<Department[]>;
  abstract getItems(): Observable<Items[]>;
  abstract getDiscrepancyLocationDetails(locId: any): Observable<DiscrepancyLocationDetails[]>;
}
