import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Department } from '../models/department';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export abstract class ReconciliationService {
  locationUrl = 'api/locations';
  departmentUrl = 'api/departments';
  abstract getLocations(): Observable<Location[]>;
  abstract getDepartments(): Observable<Department[]>;

}
