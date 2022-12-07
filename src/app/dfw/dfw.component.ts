import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dfw',
  templateUrl: './dfw.component.html',
  styleUrls: ['./dfw.component.css']
})
export class DFWComponent implements OnInit{
  constructor(private http:HttpClient) {}

  DFW: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/airportinfo/DFW").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.DFW = JSON.parse(jsonObj);
      console.log(this.DFW);
    });
  }

}
