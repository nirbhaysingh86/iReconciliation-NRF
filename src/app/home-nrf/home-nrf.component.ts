import { Component } from '@angular/core';
import { HttpClientReconciliationService } from '../services/http-client-reconciliation.service';
@Component({
  selector: 'app-home-nrf',
  templateUrl: './home-nrf.component.html',
  styleUrls: ['./home-nrf.component.scss']
})
export class HomeNrfComponent {
  locations: any;
  departments: any;
  items: any;

  constructor(private reconciliation: HttpClientReconciliationService) {

  }

  ngOnInit() {
    this.getLocation();
    this.gettDepartment();
    this.gettItem();
  }

  getLocation() {
    this.reconciliation.getLocations().subscribe((data: any) => {
      console.log(data);
      this.locations = data;
    })
  }

  gettDepartment() {
    this.reconciliation.getDepartments().subscribe((data: any) => {
      console.log(data);
      this.departments = data;

    })
  }

  gettItem() {
    this.reconciliation.getItems().subscribe((data: any) => {
      console.log(data);
      this.items = data;
    })
  }
  
}
