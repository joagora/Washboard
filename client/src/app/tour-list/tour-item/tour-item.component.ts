import { Component, OnInit, Input } from '@angular/core';
import { TourItem } from '../shared/tour-item';

@Component({
  selector: 'app-tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.css']
})
export class TourItemComponent implements OnInit {
  @Input() tourItem: TourItem;
  buttonCaption: string = 'Tickets';
  constructor() { }

  ngOnInit() {
  }

}
