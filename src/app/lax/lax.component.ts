import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lax',
  templateUrl: './lax.component.html',
  styleUrls: ['./lax.component.css']
})
export class LAXComponent implements OnInit{
  constructor(private http:HttpClient) {}

  LAX: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/airportinfo/LAX").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.LAX = JSON.parse(jsonObj);
      console.log(this.LAX);
    });
  }

}
