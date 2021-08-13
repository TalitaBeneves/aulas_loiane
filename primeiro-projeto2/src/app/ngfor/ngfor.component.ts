import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  curso: string [] = ["Angular 2", "Java", "Sla mais o que"];

  constructor() { }

  ngOnInit(): void {
  }

}
