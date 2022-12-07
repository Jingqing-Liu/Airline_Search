import { HttpClient } from '@angular/common/http';
import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mco',
  templateUrl: './mco.component.html',
  styleUrls: ['./mco.component.css']
})
export class MCOComponent implements OnInit{
  constructor(private http:HttpClient) {}

  MCO: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/airportinfo/MCO").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.MCO = JSON.parse(jsonObj);
      console.log(this.MCO);
    });
  }
}
