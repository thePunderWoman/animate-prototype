import { Component } from '@angular/core';
import {NgOut, NgIn} from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [NgOut, NgIn],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animate';
  show = true;

  toggle() {
    this.show = !this.show;
  }
}
