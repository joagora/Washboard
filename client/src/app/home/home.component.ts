import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../styles/global.scss'],
})
export class HomeComponent implements OnInit {
  offsetY: number;
  scroll = false;
  constructor() {
  }
  ngOnInit() {
  }

}
