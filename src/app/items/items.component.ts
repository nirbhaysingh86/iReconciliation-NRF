import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/department';
import { HttpClientReconciliationService } from '../services/http-client-reconciliation.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  items: any;
   
  constructor(private reconciliation: HttpClientReconciliationService, private router: Router) {
   
  }
  
  ngOnInit() {
    this.reconciliation.getItems().subscribe((data: any) => {
      console.log(data);
      this.items = data;
    })
  }
}
