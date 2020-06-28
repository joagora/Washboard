import { Component, OnInit } from '@angular/core';
import { TourItem } from './shared/tour-item';
import * as moment from 'moment';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  tourListItems: TourItem[] = [
    {
      title: 'Concert',
      content: 'A great concert',
      date: moment(),
      address: {
        country: 'US',
        city: 'New York',
        street: '5th Avenue',
        venue: 'Usher Hall'
      },
      ticketsLink: 'https://www.ticketmaster.co.uk/'
    },
    {
      title: 'Concert 2',
      content: 'A great concert',
      date: moment(),
      address: {
        country: 'US',
        city: 'New York',
        street: '5th Avenue',
        venue: 'Usher Hall'
      },
      ticketsLink: 'https://www.ticketmaster.co.uk/'
    },
    {
      title: 'Concert 3',
      content: 'A great concert',
      date: moment(),
      address: {
        country: 'US',
        city: 'New York',
        street: '5th Avenue',
        venue: 'Usher Hall'
      }
    },
    {
      title: 'Concert 4',
      content: 'A great concert',
      date: moment(),
      address: {
        country: 'US',
        city: 'New York',
        street: '5th Avenue',
        venue: 'Usher Hall'
      }
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
