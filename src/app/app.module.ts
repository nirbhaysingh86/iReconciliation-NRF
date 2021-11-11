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
import { ReconciliationNrfService } from './services/reconciliation-nrf.service';
import { HomeNrfComponent } from './home-nrf/home-nrf.component';
import { ReconciliationNrfInMemDataService } from './services/reconciliation-nrf-in-mem-data.service';
 

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeNrfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(ReconciliationNrfInMemDataService),
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      //{ path: 'viewairlines', component: AirlineListComponent },
      //{ path: 'createairline', component: CreateAirlineComponent },
      //{ path: 'updateairline', component: UpdateAirlineComponent },
      //{ path: 'deleteairline', component: DeleteAirlineComponent },
      { path: 'home', component: HomeNrfComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
