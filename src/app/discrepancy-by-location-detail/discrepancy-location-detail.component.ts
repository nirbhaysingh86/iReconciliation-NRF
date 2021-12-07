import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DiscrepancyLocationDetails } from '../models/discrepancylocationdetails';
import { HttpClientReconciliationService } from '../services/http-client-reconciliation.service';
@Component({
  selector: 'app-discrepancy-location-detail',
  templateUrl: './discrepancy-location-detail.component.html',
  styleUrls: ['./discrepancy-location-detail.component.scss']
})
export class DiscrepancyLocationDetail {
  searchTerm: any;
  pageEvent: any;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50];
  collectionSize: any;
  discrepancyLocationList: any[] = [];
  allAirlines: any[] = [];
  displayedColumns: string[] = ['sourceSystem', 'targetSystem', 'store', 'Item', 'sourceCount', 'targetCount','action'];
  @Input() discrepancylocDetail: any;
  @ViewChild(MatPaginator) paginator: any;
  dataSource: MatTableDataSource<DiscrepancyLocationDetails> = new MatTableDataSource();
  @ViewChild(MatSort, { static: false }) sort: any;

  constructor(private reconciliation: HttpClientReconciliationService) {

  }

  //bar chart will display based on week selection
  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes && changes.discrepancylocDetail) {
      this.reconciliation.getDiscrepancyLocationDetails().subscribe((data: any) => {
        console.log(data);
        this.discrepancyLocationList = data;
        this.collectionSize = data.length;
        this.allAirlines = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }
  }

  ngOnInit() {
    
  }

  showPopUp(row: any) {
    row;
  }
  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

   

  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }

}
