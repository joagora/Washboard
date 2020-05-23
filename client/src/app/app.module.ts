import { BrowserModule } from '@angular/platform-browser';
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
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
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
    ExternalLinkButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
