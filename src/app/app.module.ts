import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightsresultComponent } from './flightsresult/flightsresult.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { JFKComponent } from './jfk/jfk.component';
import { EWRComponent } from './ewr/ewr.component';
import { DFWComponent } from './dfw/dfw.component';
import { LAXComponent } from './lax/lax.component';
import { MCOComponent } from './mco/mco.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { JFKHotelComponent } from './jfk-hotel/jfk-hotel.component';
import { EWRHotelComponent } from './ewr-hotel/ewr-hotel.component';
import { DFWHotelComponent } from './dfw-hotel/dfw-hotel.component';
import { LAXHotelComponent } from './lax-hotel/lax-hotel.component';
import { MCOHotelComponent } from './mco-hotel/mco-hotel.component';
import { HotelComponent } from './hotel/hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    FlightsresultComponent,
    JFKComponent,
    EWRComponent,
    DFWComponent,
    LAXComponent,
    MCOComponent,
    SidenavComponent,
    JFKHotelComponent,
    EWRHotelComponent,
    DFWHotelComponent,
    LAXHotelComponent,
    MCOHotelComponent,
    HotelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    
],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
