import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  num:number=0;
  hide:boolean=true;
  count()
  {
    this.num++;
  }//count

  showStar()
  {
    if(this.hide==true)
    this.hide=false;
    else
    this.hide=true;
    
  }//showStar

}
