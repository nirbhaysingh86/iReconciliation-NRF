import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '../models/location';
import { HttpClientReconciliationService } from '../services/http-client-reconciliation.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  locations: any;
   
  constructor(private reconciliation: HttpClientReconciliationService, private router: Router) {
   
  }
  
  ngOnInit() {
    this.reconciliation.getLocations().subscribe((data: any) => {
      console.log(data);
      this.locations = data;
       
    })
  }
   
}
