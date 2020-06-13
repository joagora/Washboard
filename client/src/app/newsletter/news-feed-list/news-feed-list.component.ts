import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
@Component({
  selector: 'app-news-feed-list',
  templateUrl: './news-feed-list.component.html',
  styleUrls: ['./news-feed-list.component.css']
})
export class NewsFeedListComponent implements OnInit, AfterViewInit {
  instagramPosts: any;
  glide
  constructor() {
    
  }

  ngOnInit() {
    this.instagramPosts = [
      {
        "comments": {
          "count": 0
        },
        "caption": {
          "created_time": "1296710352",
          "text": "Inside le truc #foodtruck",
          "from": {
            "username": "kevin",
            "full_name": "Kevin Systrom",
            "type": "user",
            "id": "3"
          },
          "id": "26621408"
        },
        "likes": {
          "count": 15
        },
        "link": "http://instagr.am/p/BWrVZ/",
        "user": {
          "username": "kevin",
          "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
          "id": "3"
        },
        "created_time": "1296710327",
        "images": {
          "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_6.jpg",
            "width": 306,
            "height": 306
          },
          "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_5.jpg",
            "width": 150,
            "height": 150
          },
          "standard_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_7.jpg",
            "width": 612,
            "height": 612
          }
        },
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["foodtruck"],
        "id": "22721881",
        "location": {
          "latitude": 37.778720183610183,
          "longitude": -122.3962783813477,
          "id": "520640",
          "street_address": "",
          "name": "Le Truc"
        }
      },
      {
        "comments": {
          "count": 0
        },
        "caption": {
          "created_time": "1296710352",
          "text": "Inside le truc #foodtruck",
          "from": {
            "username": "kevin",
            "full_name": "Kevin Systrom",
            "type": "user",
            "id": "3"
          },
          "id": "26621408"
        },
        "likes": {
          "count": 15
        },
        "link": "http://instagr.am/p/BWrVZ/",
        "user": {
          "username": "kevin",
          "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
          "id": "3"
        },
        "created_time": "1296710327",
        "images": {
          "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_6.jpg",
            "width": 306,
            "height": 306
          },
          "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_5.jpg",
            "width": 150,
            "height": 150
          },
          "standard_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_7.jpg",
            "width": 612,
            "height": 612
          }
        },
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["foodtruck"],
        "id": "22721881",
        "location": {
          "latitude": 37.778720183610183,
          "longitude": -122.3962783813477,
          "id": "520640",
          "street_address": "",
          "name": "Le Truc"
        }
      }, 
      {
        "comments": {
          "count": 0
        },
        "caption": {
          "created_time": "1296710352",
          "text": "Inside le truc #foodtruck",
          "from": {
            "username": "kevin",
            "full_name": "Kevin Systrom",
            "type": "user",
            "id": "3"
          },
          "id": "26621408"
        },
        "likes": {
          "count": 15
        },
        "link": "http://instagr.am/p/BWrVZ/",
        "user": {
          "username": "kevin",
          "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
          "id": "3"
        },
        "created_time": "1296710327",
        "images": {
          "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_6.jpg",
            "width": 306,
            "height": 306
          },
          "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_5.jpg",
            "width": 150,
            "height": 150
          },
          "standard_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_7.jpg",
            "width": 612,
            "height": 612
          }
        },
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["foodtruck"],
        "id": "22721881",
        "location": {
          "latitude": 37.778720183610183,
          "longitude": -122.3962783813477,
          "id": "520640",
          "street_address": "",
          "name": "Le Truc"
        }
      },
        {
          "comments": {
            "count": 0
          },
          "caption": {
            "created_time": "1296710352",
            "text": "Inside le truc #foodtruck",
            "from": {
              "username": "kevin",
              "full_name": "Kevin Systrom",
              "type": "user",
              "id": "3"
            },
            "id": "26621408"
          },
          "likes": {
            "count": 15
          },
          "link": "http://instagr.am/p/BWrVZ/",
          "user": {
            "username": "kevin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
            "id": "3"
          },
          "created_time": "1296710327",
          "images": {
            "low_resolution": {
              "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_6.jpg",
              "width": 306,
              "height": 306
            },
            "thumbnail": {
              "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_5.jpg",
              "width": 150,
              "height": 150
            },
            "standard_resolution": {
              "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_7.jpg",
              "width": 612,
              "height": 612
            }
          },
          "type": "image",
          "users_in_photo": [],
          "filter": "Earlybird",
          "tags": ["foodtruck"],
          "id": "22721881",
          "location": {
            "latitude": 37.778720183610183,
            "longitude": -122.3962783813477,
            "id": "520640",
            "street_address": "",
            "name": "Le Truc"
          }
        },
        {
          "comments": {
            "count": 0
          },
          "caption": {
            "created_time": "1296710352",
            "text": "Inside le truc #foodtruck",
            "from": {
              "username": "kevin",
              "full_name": "Kevin Systrom",
              "type": "user",
              "id": "3"
            },
            "id": "26621408"
          },
          "likes": {
            "count": 15
          },
          "link": "http://instagr.am/p/BWrVZ/",
          "user": {
            "username": "kevin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
            "id": "3"
          },
          "created_time": "1296710327",
          "images": {
            "low_resolution": {
              "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_6.jpg",
              "width": 306,
              "height": 306
            },
            "thumbnail": {
              "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_5.jpg",
              "width": 150,
              "height": 150
            },
            "standard_resolution": {
              "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_7.jpg",
              "width": 612,
              "height": 612
            }
          },
          "type": "image",
          "users_in_photo": [],
          "filter": "Earlybird",
          "tags": ["foodtruck"],
          "id": "22721881",
          "location": {
            "latitude": 37.778720183610183,
            "longitude": -122.3962783813477,
            "id": "520640",
            "street_address": "",
            "name": "Le Truc"
          }
        },
          {
            "comments": {
              "count": 0
            },
            "caption": {
              "created_time": "1296710352",
              "text": "Inside le truc #foodtruck",
              "from": {
                "username": "kevin",
                "full_name": "Kevin Systrom",
                "type": "user",
                "id": "3"
              },
              "id": "26621408"
            },
            "likes": {
              "count": 15
            },
            "link": "http://instagr.am/p/BWrVZ/",
            "user": {
              "username": "kevin",
              "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
              "id": "3"
            },
            "created_time": "1296710327",
            "images": {
              "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_6.jpg",
                "width": 306,
                "height": 306
              },
              "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_5.jpg",
                "width": 150,
                "height": 150
              },
              "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_7.jpg",
                "width": 612,
                "height": 612
              }
            },
            "type": "image",
            "users_in_photo": [],
            "filter": "Earlybird",
            "tags": ["foodtruck"],
            "id": "22721881",
            "location": {
              "latitude": 37.778720183610183,
              "longitude": -122.3962783813477,
              "id": "520640",
              "street_address": "",
              "name": "Le Truc"
            }
          }
      ]
      this.glide = new Glide('#newsletter-glider',
        {
          startAt: 1,
          perView: 3,
          bound: true,
          animationDuration: 1100,
          rewind: true,
          animationTimingFunc: 'ease-in-out'
        }
      )
  }
  ngAfterViewInit(){
    this.glide.mount({ Controls, Breakpoints })
  }
}
