import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { AboutDetailsComponent } from './about/about-details/about-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourItemComponent } from './tour-list/tour-item/tour-item.component';
import { ExternalLinkButtonComponent } from './external-link-button/external-link-button.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewsFeedListComponent } from './newsletter/news-feed-list/news-feed-list.component';
import { NewsFeedComponent } from './newsletter/news-feed-list/news-feed/news-feed.component';
import { NewsFeedService } from './shared/services/news-feed-service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParallaxDirective } from './animations/parallax-directive';
import { LandingPageComponent } from './landing-page/landing-page.component';
const appRoutes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutDetailsComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ReadMoreComponent,
    AboutDetailsComponent,
    GalleryComponent,
    TourListComponent,
    TourItemComponent,
    ExternalLinkButtonComponent,
    NewsletterComponent,
    NewsFeedListComponent,
    NewsFeedComponent,
    ParallaxDirective,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false })
  ],
  providers: [
    NewsFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
