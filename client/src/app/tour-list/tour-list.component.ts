import { Component, OnInit } from '@angular/core';
import { TourItem } from './shared/tour-item';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  tourListItems: TourItem[] = [
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
