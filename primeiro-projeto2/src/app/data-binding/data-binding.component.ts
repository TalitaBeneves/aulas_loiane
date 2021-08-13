import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

    url: string = 'http://loiane.training';
    
// aula do Event Binding
    onMudouValor(evento: any){
      console.log(evento.novoValor);
    }

  constructor() { }

  cursoAngular: boolean = true;

// colocar uma imagem com link
  urlImagem = 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2018/11/Lorem-Ipsum-alternatives.png.webp';

// aula do Event Binding
  valorAtual: string = '';
  valorSalvo: any

  isMouseOver: boolean = false;

  nome: string = 'abc';
  pessoa = {
    nome: 'nome',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';
// caso a gente queria deixar esse valor inicial pe;o data binding é só colocar na binding html []"valorInicial"

  // valorInicial = 15;


  getValor(){
    return 1;

  }

  getCurtirCurso(){
    return true;
  }

  ngOnInit(): void {
  }

// aula do Event Binding
  botaoClicado(){
    alert('Botão Clicado!');
  }

  onkeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement> evento.target).value;

  }
  salvarValor(valor: any){
    this.valorSalvo = valor;

  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }





}
