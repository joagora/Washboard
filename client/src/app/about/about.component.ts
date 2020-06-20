import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../styles/global.scss']
})
export class AboutComponent implements OnInit {
  title: string = 'ABOUT';
  buttonCaption: string = 'Read more'
  subtitle: string = 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.'
  ngOnInit() {}
 
}
