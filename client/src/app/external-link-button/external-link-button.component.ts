import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-external-link-button',
  templateUrl: './external-link-button.component.html',
  styleUrls: ['./external-link-button.component.css']
})
export class ExternalLinkButtonComponent implements OnInit {
  @Input() linkToRedirect: string;
  @Input() buttonCaption: string;
  constructor() { 
  }

  ngOnInit() {
    console.log(this.linkToRedirect);
    
  }

  goToTickets() {
    window.location.href = this.linkToRedirect;
  }
}
