import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mco-hotel',
  templateUrl: './mco-hotel.component.html',
  styleUrls: ['./mco-hotel.component.css']
})
export class MCOHotelComponent implements OnInit{
  constructor(private http:HttpClient) {}

  MCO_Hotel: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/Hotel/MCO_Hotel").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.MCO_Hotel = JSON.parse(jsonObj);
      console.log(this.MCO_Hotel);
    });
  }

}
