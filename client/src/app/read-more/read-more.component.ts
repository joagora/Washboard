import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {

  @Output() readMore = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.readMore.emit(event);
  }
}
