import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { HttpModule } from '@angular/http';
import { GuestService } from './guest.service';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home.component';
import { DetailsComponent } from './details/details.component';
import { PhotosComponent } from './photos/photos.component';
import { EngagementPhotosComponent } from './photos/engagement-photos/engagement-photos.component';

import { AppRoutingModule } from './app-routing.module';
import { PhotoRoutingModule } from './photos/photo-routing/photo-routing.module';
import { GiftRegistryComponent } from './gift-registry/gift-registry.component';
import { TravelComponent } from './travel/travel.component';
import { RsvpComponent } from './rsvp/rsvp.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent,
    PhotosComponent,
    EngagementPhotosComponent,
    GiftRegistryComponent,
    TravelComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoRoutingModule,
    CdkStepperModule,
    HttpModule,
    FormsModule
  ],
  providers: [GuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
