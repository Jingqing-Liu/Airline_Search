import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jfk',
  templateUrl: './jfk.component.html',
  styleUrls: ['./jfk.component.css']
})
export class JFKComponent implements OnInit{

  constructor(private http:HttpClient) {}

  JFK: any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>("http://localhost:3000/api/airportinfo/JFK").subscribe(data => {
      var jsonObj = JSON.stringify(data.documents);
      this.JFK = JSON.parse(jsonObj);
      console.log(this.JFK);
    });
  }
}
