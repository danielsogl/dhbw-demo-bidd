import { Component } from '@angular/core';
import * as localforage from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    localforage.config({
      driver: localforage.WEBSQL,
      name: 'dhbw',
      version: 1.0,
      size: 4980736,
      storeName: '_dhbw',
      description: 'some description'
    });
  }
}
