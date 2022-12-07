import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-flightsresult',
  templateUrl: './flightsresult.component.html',
  styleUrls: ['./flightsresult.component.css']
})
export class FlightsresultComponent implements OnInit{

  constructor(private shared: SharedService, private http: HttpClient) {}

  Flights: any=[];
  URL : string = '';
  type: boolean = false;

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.URL = this.shared.getMessage();
    this.http.get<any>(this.URL).subscribe(data=> {
      var jsonObj = JSON.stringify(data.documents);
      this.Flights = JSON.parse(jsonObj);
      this.Flights[0].type === 'arrival' ? this.type = true : this.type = false;
    });
  }
}
