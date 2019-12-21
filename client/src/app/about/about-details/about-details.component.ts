import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.css']
})
export class AboutDetailsComponent implements OnInit {

  title = "Newman Taylor Baker";
  subtitle = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki."
  @Input() display: boolean;
  constructor() { }

  ngOnInit() {
  }

}
