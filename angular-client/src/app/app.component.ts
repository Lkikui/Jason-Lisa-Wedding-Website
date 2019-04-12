import { Component, OnInit } from '@angular/core';
import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My First Angular App!';
  
  ngOnInit() {
    this.adjustDivWidth();
    window.onresize = this.adjustDivWidth;
  }
  
  adjustDivWidth() {
    var wrapperDiv = $(".wrapper")[0] as HTMLCanvasElement;
    var innerDiv = $(".mainContents")[0] as HTMLCanvasElement;

    innerDiv.style.width = `${wrapperDiv.offsetWidth - 43 - 65 }px`;
  }

}
