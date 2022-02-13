import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-projeto',
  templateUrl: './primeiro-projeto.component.html',
  styleUrls: ['./primeiro-projeto.component.css']
})
export class PrimeiroProjetoComponent implements OnInit {

  link: string;
  idade: number;
  atividades: string [] = ['programação', 'tecnica de TI'];
  lista: string [] = ['frutas vermelhas', 'frutas laranjas'];

  urlImg: any = "http://lorempixel.com.br/500/400/?1"
  texto: string = "Talita tem 19 anos mas em abril vai fazer 20 anos"

  constructor() {
    this.link = 'https://www.youtube.com/watch?v=bBFScNfW904&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=7';
    this.idade = 19;
    this.atividades;
    this.lista;
   }

  ngOnInit(): void {
  }

}
