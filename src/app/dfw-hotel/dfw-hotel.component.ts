import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dfw-hotel',
  templateUrl: './dfw-hotel.component.html',
  styleUrls: ['./dfw-hotel.component.css']
})
export class DFWHotelComponent implements OnInit{

  constructor(private http:HttpClient) {}

  DFW_Hotel: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/Hotel/DFW_Hotel").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.DFW_Hotel = JSON.parse(jsonObj);
      console.log(this.DFW_Hotel);
    });
  }

}
