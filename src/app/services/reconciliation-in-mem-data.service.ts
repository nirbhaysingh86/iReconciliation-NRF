 
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
      { locid: 1, locationName: 'Bloomington', locationCode: 'BL', locationType: 'International' },
      { locid: 2, locationName: 'Burnsville', locationCode: 'BU', locationType: 'International' },
      { locid: 3, locationName: 'Eden Prairie', locationCode: 'EP', locationType: 'International' },
      { locid: 4, locationName: 'Eagan', locationCode: 'EA', locationType: 'International' },
      { locid: 5, locationName: 'Roseville', locationCode: 'RO', locationType: 'International' },
      { locid: 6, locationName: 'Shakopee', locationCode: 'SH', locationType: 'International' },
    ];
    let departments: Department[] = [
      { dptid: 1, departmentName: 'menswer', departmentCode: 'BL', discrepancy:1599, departmentType: 'International' },
      { dptid: 2, departmentName: 'shoes', departmentCode: 'BU', discrepancy: 136,departmentType: 'International' },
      { dptid: 3, departmentName: 'handbags', departmentCode: 'EP', discrepancy: 777,departmentType: 'International' },
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
 
