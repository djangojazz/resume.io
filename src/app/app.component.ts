import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Brett Morin - Skills';

  public navChanged(nav: string) {
    this.title = `Brett Morin - ${nav}`;
  }
}