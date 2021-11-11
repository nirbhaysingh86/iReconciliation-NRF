import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Department } from '../models/department';
import { Observable } from 'rxjs';
import { Items } from '../models/Items';
@Injectable({
  providedIn: 'root'
})

export abstract class ReconciliationService {
  locationUrl = 'api/locations';
  departmentUrl = 'api/departments';
  itemtUrl = 'api/items';
  abstract getLocations(): Observable<Location[]>;
  abstract getDepartments(): Observable<Department[]>;
  abstract getItems(): Observable<Items[]>;
}
