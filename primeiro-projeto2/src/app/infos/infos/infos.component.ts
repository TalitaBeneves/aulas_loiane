import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  anuncio: any | undefined
  visualizacoes: any
  dataHoraCadastro: any

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
