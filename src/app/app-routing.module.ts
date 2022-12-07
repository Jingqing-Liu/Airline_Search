import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DFWHotelComponent } from './dfw-hotel/dfw-hotel.component';
import { DFWComponent } from './dfw/dfw.component';
import { EWRHotelComponent } from './ewr-hotel/ewr-hotel.component';
import { EWRComponent } from './ewr/ewr.component';
import { FlightsresultComponent } from './flightsresult/flightsresult.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { JFKHotelComponent } from './jfk-hotel/jfk-hotel.component';
import { JFKComponent } from './jfk/jfk.component';
import { LAXHotelComponent } from './lax-hotel/lax-hotel.component';
import { LAXComponent } from './lax/lax.component';
import { MCOHotelComponent } from './mco-hotel/mco-hotel.component';
import { MCOComponent } from './mco/mco.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchBarComponent},
  {path: 'result', component: FlightsresultComponent},
  {path: 'home/JFK', component:JFKComponent},
  {path: 'home/EWR', component:EWRComponent},
  {path: 'home/DFW', component:DFWComponent},
  {path: 'home/LAX', component:LAXComponent},
  {path: 'home/MCO', component:MCOComponent},
  {path: '', component:HomeComponent},
  {path: 'hotel', component:HotelComponent},
  {path: 'hotel/JFK_Hotel', component:JFKHotelComponent},
  {path: 'hotel/EWR_Hotel', component:EWRHotelComponent},
  {path: 'hotel/DFW_Hotel', component:DFWHotelComponent},
  {path: 'hotel/LAX_Hotel', component:LAXHotelComponent},
  {path: 'hotel/MCO_Hotel', component:MCOHotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
