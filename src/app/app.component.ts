import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None, /* always do this on appComponent to make global 
  changes like margin 0 to delete body offset*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
