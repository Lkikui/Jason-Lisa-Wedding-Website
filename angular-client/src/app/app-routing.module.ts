// ./angular-client/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home.component';
import { DetailsComponent } from './details/details.component';
import { PhotosComponent } from './photos/photos.component';
import { GiftRegistryComponent } from './gift-registry/gift-registry.component';
import { TravelComponent } from './travel/travel.component';
import { RsvpComponent } from './rsvp/rsvp.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'registry', component: GiftRegistryComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'rsvp', component: RsvpComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}