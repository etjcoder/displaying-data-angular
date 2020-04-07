import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  logs = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret
    this.logs.push(new Date());
  }


}
