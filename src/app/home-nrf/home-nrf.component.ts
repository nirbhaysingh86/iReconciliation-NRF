import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from '../models/airline';
import { HttpClientReconciliationNrfService } from '../services/http-client-reconciliation-nrf.service';

@Component({
  selector: 'app-home-nrf',
  templateUrl: './home-nrf.component.html',
  styleUrls: ['./home-nrf.component.scss']
})
export class HomeNrfComponent {
  airlines: any;
  allAirlines: any;
  collectionSize: any;
  searchProviderCode: any;

  constructor(private airlineService: HttpClientReconciliationNrfService, private router: Router) {
   
  }
  
  ngOnInit() {
    this.airlineService.getAirlines().subscribe((data: any) => {
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
