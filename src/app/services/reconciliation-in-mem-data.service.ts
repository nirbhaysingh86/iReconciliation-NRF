 
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Department } from '../models/department';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class ReconciliationInMemDataService implements InMemoryDbService {
  createDb() {
    let locations: Location[] = [
      { id: 1, locationName: 'Bloomington', locationCode: 'BL', locationType: 'International' },
      { id: 2, locationName: 'Burnsville', locationCode: 'BU', locationType: 'International' },
      { id: 3, locationName: 'Eden Prairie', locationCode: 'EP', locationType: 'International' },
      { id: 4, locationName: 'Eagan', locationCode: 'EA', locationType: 'International' },
      { id: 5, locationName: 'Roseville', locationCode: 'RO', locationType: 'International' },
      { id: 6, locationName: 'Shakopee', locationCode: 'SH', locationType: 'International' },
    ];
    let departments: Department[] = [
      { id: 1, departmentName: 'Bloomington Walmart', departmentCode: 'BL', departmentType: 'International' },
      { id: 2, departmentName: 'Burnsville Walmart', departmentCode: 'BU', departmentType: 'International' },
      { id: 3, departmentName: 'Eden Prairie Walmart', departmentCode: 'EP', departmentType: 'International' },
      { id: 4, departmentName: 'Eagan Walmart', departmentCode: 'EA', departmentType: 'International' },
      { id: 5, departmentName: 'Roseville Walmart', departmentCode: 'RO', departmentType: 'International' },
      { id: 6, departmentName: 'Shakopee Walmart', departmentCode: 'SH', departmentType: 'International' },
    ];
    return { locations, departments };
  }
   
}
//export class DepartmentInMemDataService implements InMemoryDbService {
   
//  createDb() {
//    let departments: Department[] = [
//      { id: 1, departmentName: 'Bloomington Walmart', departmentCode: 'BL', departmentType: 'International' },
//      { id: 2, departmentName: 'Burnsville Walmart', departmentCode: 'BU', departmentType: 'International' },
//      { id: 3, departmentName: 'Eden Prairie Walmart', departmentCode: 'EP', departmentType: 'International' },
//      { id: 4, departmentName: 'Eagan Walmart', departmentCode: 'EA', departmentType: 'International' },
//      { id: 5, departmentName: 'Roseville Walmart', departmentCode: 'RO', departmentType: 'International' },
//      { id: 6, departmentName: 'Shakopee Walmart', departmentCode: 'SH', departmentType: 'International' },
//    ];
//    return { departments };
//  }
//}
