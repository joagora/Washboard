import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
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
