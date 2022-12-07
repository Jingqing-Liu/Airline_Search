import { Component} from '@angular/core';
import { urlencoded } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  JFK = "This is JFK";
  EWR = "This is EWR";
  DFW = "This is DFW";
  LAX = "This is LAX";
  MCO = "This is MCO";
}
