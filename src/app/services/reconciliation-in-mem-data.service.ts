 
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Department } from '../models/department';
import { Items } from '../models/Items';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class ReconciliationInMemDataService implements InMemoryDbService {
  createDb() {
    let locations: Location[] = [
      { locid: 1, locationName: 'Portland', locationCode: 'PL', locationType: 'International', discrepancy: 400 },
      { locid: 2, locationName: 'Denver', locationCode: 'DN', locationType: 'International', discrepancy: 366 },
      { locid: 3, locationName: 'Seattle', locationCode: 'SE', locationType: 'International', discrepancy: 244 },
      { locid: 4, locationName: 'Los Angeles', locationCode: 'LA', locationType: 'International', discrepancy: 379 },
      { locid: 5, locationName: 'San Francisco', locationCode: 'SF', locationType: 'International', discrepancy: 356 },
      { locid: 6, locationName: 'San Diego', locationCode: 'SD', locationType: 'Domestic', discrepancy: 345 },
      { locid: 7, locationName: 'Austin', locationCode: 'AS', locationType: 'Domestic', discrepancy: 378 },
      { locid: 8, locationName: 'Phoenix', locationCode: 'PX', locationType: 'International', discrepancy: 321},
      { locid: 9, locationName: 'Tucson', locationCode: 'TX', locationType: 'Domestic', discrepancy: 222 },
      { locid: 10, locationName: 'Boston', locationCode: 'BN', locationType: 'Domestic', discrepancy: 231},
      { locid: 11, locationName: 'New York', locationCode: 'NY', locationType: 'Domestic', discrepancy: 256 },
      { locid: 12, locationName: 'Florida', locationCode: 'FL', locationType: 'International', discrepancy: 230},
      { locid: 13, locationName: 'Chicago', locationCode: 'CO', locationType: 'International', discrepancy: 198},
      { locid: 14, locationName: 'Minnesota', locationCode: 'MN', locationType: 'International', discrepancy: 199 },
    ];
    let departments: Department[] = [
      { dptid: 1, departmentName: 'menswer', departmentCode: 'BL', discrepancy:1599, departmentType: 'International' },
      { dptid: 2, departmentName: 'shoes', departmentCode: 'BU', discrepancy: 136,departmentType: 'International' },
      { dptid: 3, departmentName: 'handbags', departmentCode: 'EP', discrepancy: 777, departmentType: 'Domestic' },
      { dptid: 4, departmentName: 'beauty', departmentCode: 'EA', discrepancy: 1448,departmentType: 'International' },
      { dptid: 5, departmentName: 'accessories', departmentCode: 'RO', discrepancy: 405, departmentType: 'International' },
       
    ];
    let items: Items[] = [
      { itemid: 1, dptid: 1, locid: 1,itemsName: 'Levis', itemsCode: 'LV', itemsPrice: '456' },
      { itemid: 2, dptid: 1, locid: 1, itemsName: 'Lee', itemsCode: 'LE', itemsPrice: '45' },
      { itemid: 3, dptid: 1, locid: 1,itemsName: 'lee cooper', itemsCode: 'LC', itemsPrice: '43' },
      { itemid: 4, dptid: 1, locid: 1,itemsName: 'Eagan Walmart', itemsCode: 'EA', itemsPrice: '565' },
      { itemid: 5, dptid: 1, locid: 2, itemsName: 'Roseville Walmart', itemsCode: 'RO', itemsPrice: '3455' },
      { itemid: 6, dptid: 1, locid: 1, itemsName: 'Shakopee Walmart', itemsCode: 'SH', itemsPrice: '345' },
      { itemid: 7, dptid: 1, locid: 1,itemsName: 'Bloomington Walmart', itemsCode: 'BL', itemsPrice: '456' },
      { itemid: 8, dptid: 1, locid: 1,  itemsName: 'Burnsville Walmart', itemsCode: 'BU', itemsPrice: '45' },
      { itemid: 9, dptid: 1, locid: 1, itemsName: 'Eden Prairie Walmart', itemsCode: 'EP', itemsPrice: '43' },
      { itemid: 10, dptid: 1, locid: 1, itemsName: 'Eagan Walmart', itemsCode: 'EA', itemsPrice: '565' },
      { itemid: 11, dptid: 1, locid: 1, itemsName: 'Roseville Walmart', itemsCode: 'RO', itemsPrice: '3455' },
      { itemid: 12, dptid: 1, locid: 1,itemsName: 'Shakopee Walmart', itemsCode: 'SH', itemsPrice: '345' },
    ];
    return { locations, departments, items };
  }
   
}
 
