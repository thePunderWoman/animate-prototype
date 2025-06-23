import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {
  title = 'animate';
  itemNum = 0;

  items: number[] = [];

  inClass() {
    return 'appear';
  }

  add() {
    this.items.push(this.itemNum++);
  }
  remove() {
    this.items.pop();
  }
}
