import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jfk-hotel',
  templateUrl: './jfk-hotel.component.html',
  styleUrls: ['./jfk-hotel.component.css']
})
export class JFKHotelComponent implements OnInit{

  constructor(private http:HttpClient) {}

  JFK_Hotel: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/Hotel/JFK_Hotel").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.JFK_Hotel = JSON.parse(jsonObj);
      console.log(this.JFK_Hotel);
    });
  }

}
