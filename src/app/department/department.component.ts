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
  departments: any;
   
  constructor(private reconciliation: HttpClientReconciliationService, private router: Router) {
   
  }
  
  ngOnInit() {
    this.reconciliation.getDepartments().subscribe((data: any) => {
      console.log(data);
      this.departments = data;
      
    })
  }

   
}
