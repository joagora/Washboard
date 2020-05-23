import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { NewsFeedService } from 'src/app/shared/services/news-feed-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  @Input() instagramPost: any;
  postLink: string;
  postMarkup: SafeHtml;
  constructor(private newsFeedService: NewsFeedService, private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getFeed();
  }

  getFeed() {
    this.newsFeedService.getFeedDetails(this.instagramPost.link).subscribe(data => {
      this.postMarkup = this.domSanitizer.bypassSecurityTrustHtml(data.html);
      window['instgrm'].Embeds.process()
    })
  }

}