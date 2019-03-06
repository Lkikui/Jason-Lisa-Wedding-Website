import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getCheckNoChangesMode } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  currentTab: number;

  constructor(
    private _router: Router
  ) {}

  ngOnInit() {
    this.currentTab = 0; // Current tab is set to be the first tab (0)
    this.showTab(this.currentTab); // Display the current tab
  }

  showTab(n) {
    var tab = document.getElementsByClassName("tab");
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");

    tab[n].setAttribute("style", "display: block");
    
    if (n == 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "inline";
      prevBtn.style.marginRight = "1rem";
    }

    if (n == (tab.length - 2)) {
      nextBtn.innerHTML = "Submit";
    } else if (n == (tab.length - 1)) {
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
      setTimeout(() => this.goHome(), 2000);
    } else if (n === 0) {
      nextBtn.innerHTML = "Find My Invitation";
    } else {
      nextBtn.innerHTML = "Next";
    }

    this.fixStepIndicator(n);
  }

    nextPrev(n) {
      var tab = document.getElementsByClassName("tab");

      tab[this.currentTab].setAttribute("style", "display: none");

      this.currentTab = this.currentTab + n;

      this.showTab(this.currentTab);
    }

    fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i, x = document.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class on the current step:
      x[n].className += " active";
    }

    goHome() {
      this._router.navigate(['/']);
    }
}
