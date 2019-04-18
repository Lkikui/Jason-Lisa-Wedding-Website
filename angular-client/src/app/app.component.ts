import { Component, OnInit } from '@angular/core';
import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My First Angular App!';
  delay = 100;
  
  ngOnInit() {
    let resizeTaskId = null;
    
    this.adjustDivWidth(event);

    window.addEventListener('resize', event => {
      if (resizeTaskId !== null) {
        clearTimeout(resizeTaskId);
      }

      resizeTaskId = setTimeout(() => {
        resizeTaskId = null;
        this.adjustDivWidth(event);
      }, this.delay);
    });
  }
  
  adjustDivWidth(event) {
    const wrapperDiv = $(".wrapper")[0] as HTMLCanvasElement;
    let innerDiv = $(".mainContents")[0] as HTMLCanvasElement;

    innerDiv.style.width = `${wrapperDiv.clientWidth - (43 * 2 + 18) }px`;
  }

}
