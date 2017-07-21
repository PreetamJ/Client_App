import { Component, OnInit } from '@angular/core';
import { POCService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [POCService]
})
export class AppComponent {
  constructor() {
  }

  ngOnInit() {
  }
}