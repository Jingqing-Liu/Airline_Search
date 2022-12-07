import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ewr-hotel',
  templateUrl: './ewr-hotel.component.html',
  styleUrls: ['./ewr-hotel.component.css']
})
export class EWRHotelComponent implements OnInit{

  constructor(private http:HttpClient) {}

  EWR_Hotel: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/Hotel/EWR_Hotel").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.EWR_Hotel = JSON.parse(jsonObj);
      console.log(this.EWR_Hotel);
    });
  }

}
