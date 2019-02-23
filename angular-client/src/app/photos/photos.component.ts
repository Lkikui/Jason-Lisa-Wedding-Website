import { Component, OnInit } from '@angular/core';
// import { $ } from 'protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
    $(".engagement").click(function(){
      window.location.href = $(this).find("a").attr("routerLink");
      return false;
    });
  }

}

