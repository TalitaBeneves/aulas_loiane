import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos3',
  templateUrl: './cursos3.component.html',
  styleUrls: ['./cursos3.component.css']
})
export class Cursos3Component implements OnInit {

  cursos: string [] = ['Angular 2', 'Java', 'Sla mais o que'];

  constructor() { }

  ngOnInit(): void {
  }

}
