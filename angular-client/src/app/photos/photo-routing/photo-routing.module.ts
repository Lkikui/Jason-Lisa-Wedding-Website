import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EngagementPhotosComponent } from '../engagement-photos/engagement-photos.component';

const photoRoutes: Routes = [
  { path:"photos/engagement-photos", component:EngagementPhotosComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(photoRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PhotoRoutingModule { }
