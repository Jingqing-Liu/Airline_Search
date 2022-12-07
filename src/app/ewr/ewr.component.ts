import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ewr',
  templateUrl: './ewr.component.html',
  styleUrls: ['./ewr.component.css']
})
export class EWRComponent implements OnInit{
  constructor(private http:HttpClient) {}

  EWR: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/airportinfo/EWR").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.EWR = JSON.parse(jsonObj);
      console.log(this.EWR);
    });
  }
}
