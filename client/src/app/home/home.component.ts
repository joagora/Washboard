import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../styles/global.scss']
})
export class HomeComponent implements OnInit {

  config: any;
  fullpage_api: any;
  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {
      menu: '#menu',
      anchors: ['page1','page2','page3']
    };
  }
  ngOnInit() {
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
