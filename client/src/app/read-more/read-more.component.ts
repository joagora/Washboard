import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  display = true;
  @Output() readMore = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.readMore.emit(event);
    this.display = !this.display;
  }
}
