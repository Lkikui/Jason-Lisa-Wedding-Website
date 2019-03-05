import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  currentTab: number;
  n: number;

  constructor() {
  }

  ngOnInit() {
    this.currentTab = 0; // Current tab is set to be the first tab (0)
    this.showTab(this.currentTab); // Display the current tab
  }

  showTab(n) {
    var tab = document.getElementsByClassName("tab");
    tab[n].setAttribute("style", "display: block");
    
    if (this.n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }

    if (this.n == (tab.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }

    this.fixStepIndicator(n);
  }

    nextPrev(n) {
      var tab = document.getElementsByClassName("tab");
      var prevBtn = document.getElementById("nextBtn");
      var nextBtn = document.getElementById("nextBtn");

      // if (n == 1 && !this.validateForm()) return false;

      tab[this.currentTab].setAttribute("style", "display: none");

      this.currentTab = this.currentTab + n;


      var rsvpForm = <HTMLFormElement>document.getElementById("rsvpForm");

      if (this.currentTab >= tab.length) {
        this.currentTab = this.currentTab + n;
        rsvpForm.submit();
        return false;
      }

      this.showTab(this.currentTab);
      console.log(this.currentTab);
    }
    
    // validateForm() {
    //   var x, y, i, valid = true;
    //   x = document.getElementsByClassName("tab");
    //   y = x[this.currentTab].getElementsByTagName("input");
    //   for (i = 0; i < y.length; i++) {
    //     if (y[i].value == "") {
    //       y[i].className += " invalid";
    //       valid = false;
    //     }
    //   }
    //   if (valid) {
    //     document.getElementsByClassName("step")[this.currentTab].className += " finish";
    //   }
    //   return valid; 
    // }

    fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i, x = document.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class on the current step:
      x[n].className += " active";
    }
}
