import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TourListComponent } from '../tour-list/tour-list.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { AboutComponent } from '../about/about.component';
import { TourItemComponent } from '../tour-list/tour-item/tour-item.component';
import { ReadMoreComponent } from '../read-more/read-more.component';
import { ExternalLinkButtonComponent } from '../external-link-button/external-link-button.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        TourListComponent,
        GalleryComponent,
        AboutComponent,
        TourItemComponent,
        ReadMoreComponent,
        ExternalLinkButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
