import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-engagement-photos',
  templateUrl: './engagement-photos.component.html',
  styleUrls: ['./engagement-photos.component.css']
})
export class EngagementPhotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const outermostContainer = document.createElement("div")
    outermostContainer.classList.add("modal", "fade");
    outermostContainer.setAttribute("id", "photoModal");
    outermostContainer.setAttribute("tabindex", "-1");
    outermostContainer.setAttribute("role", "dialog");
    outermostContainer.setAttribute("aria-hidden", "true");
  }

}
