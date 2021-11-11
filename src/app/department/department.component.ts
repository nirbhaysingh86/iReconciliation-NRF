import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/department';
import { HttpClientReconciliationService } from '../services/http-client-reconciliation.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  airlines: any;
  allAirlines: any;
  collectionSize: any;
  searchProviderCode: any;

  constructor(private reconciliation: HttpClientReconciliationService, private router: Router) {
   
  }
  
  ngOnInit() {
    this.reconciliation.getDepartments().subscribe((data: any) => {
      console.log(data);
      this.airlines = data;
      localStorage.setItem("airlineList", JSON.stringify(data));
    })
  }

  search(value: any): void {
    this.allAirlines = JSON.parse(localStorage.getItem("airlineList") as any);
    value = value.target.value;
    this.airlines = this.allAirlines.filter((val:any) => val.providerCode.toLowerCase().includes(value.toLowerCase()));
    this.collectionSize = this.airlines.length;
  }
}
