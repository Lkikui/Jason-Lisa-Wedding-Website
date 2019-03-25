import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getCheckNoChangesMode } from '@angular/core/src/render3/state';
import { GuestService } from '../guest.service';
import { Guest } from '../../guest';
import { HEADER_OFFSET } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  guests:any[] = [];
  currentTab: number;
  guest: any;
  submitted = false;

  constructor(
    private _router: Router,
    private guestService: GuestService
  ) {}

  ngOnInit(): void {
    this.guest = {mainFirstName: "", mainLastName: ""};

    this.guestService.getGuests()
      .then(guests => this.guests = guests.guests.reverse().slice(0,3))

    this.currentTab = 0; // Current tab is set to be the first tab (0)
    this.showTab(this.currentTab); // Display the current tab
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  }

  onSubmit() {
    this.submitted = true;
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

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.guest); }
}
