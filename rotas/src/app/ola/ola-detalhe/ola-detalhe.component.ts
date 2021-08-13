import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ola-detalhe',
  templateUrl: './ola-detalhe.component.html',
  styleUrls: ['./ola-detalhe.component.css']
})
export class OlaDetalheComponent implements OnInit {

  id: any;
  inscricao: Subscription = new Subscription;

  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params ['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params ['id'];

      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}

