import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeNrfComponent } from './home-nrf/home-nrf.component';
import { ReconciliationInMemDataService, } from './services/reconciliation-in-mem-data.service';
import { LocationComponent } from './location/location.component';
import { DepartmentComponent } from './department/department.component';
import { ItemsComponent } from './items/items.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeNrfComponent,
    LocationComponent,
    DepartmentComponent,
    ItemsComponent,
    LineChartComponent,
    DoughnutChartComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(ReconciliationInMemDataService),
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeNrfComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
