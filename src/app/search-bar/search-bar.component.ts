import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, SelectControlValueAccessor } from '@angular/forms';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  
  flightnumber: string = '';
  selectedairport: string = '';
  selectedDeorArr: string ='';
  selectedAirline: string = '';
  Url: string = "http://localhost:3000/api/";
  FinalURL: string = '';


  constructor (private shared: SharedService) {}

  ngOnInit(): void {
    this.clickme();
  }

  clickme() {
    {this.flightnumber !== '' ? this.flightnumber = this.flightnumber : this.flightnumber = 'noData'}
    {this.selectedAirline !=='' ? this.selectedAirline = this.selectedAirline : this.selectedAirline = "noData"}
    {this.selectedairport !=='' ? this.selectedairport = this.selectedairport : this.selectedairport = ""}
    {this.selectedDeorArr !=='' ? this.selectedDeorArr = this.selectedDeorArr : this.selectedDeorArr = ""}
    {this.FinalURL = this.Url.concat(this.selectedairport, '/' , this.selectedDeorArr, '/' + this.selectedAirline , '/', this.flightnumber)}
    console.log("this is Ariport", this.selectedairport);
    console.log("this is flightnumber",this.flightnumber);
    console.log("this is Airline", this.selectedAirline);
    console.log("this is status", this.selectedDeorArr);
    console.log("this is URL", this.FinalURL);
    this.shared.setMessage(this.FinalURL);
  };


}
