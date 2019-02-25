import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home.component';
import { DetailsComponent } from './details/details.component';
import { PhotosComponent } from './photos/photos.component';
import { EngagementPhotosComponent } from './photos/engagement-photos/engagement-photos.component';

import { AppRoutingModule } from './app-routing.module';
import { PhotoRoutingModule } from './photos/photo-routing/photo-routing.module';
import { GiftRegistryComponent } from './gift-registry/gift-registry.component';
import { TravelComponent } from './travel/travel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent,
    PhotosComponent,
    EngagementPhotosComponent,
    GiftRegistryComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
