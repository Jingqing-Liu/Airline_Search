import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lax-hotel',
  templateUrl: './lax-hotel.component.html',
  styleUrls: ['./lax-hotel.component.css']
})
export class LAXHotelComponent implements OnInit{
  constructor(private http:HttpClient) {}

  LAX_Hotel: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/Hotel/LAX_Hotel").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.LAX_Hotel = JSON.parse(jsonObj);
      console.log(this.LAX_Hotel);
    });
  }

}
