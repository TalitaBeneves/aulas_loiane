import { CursosService } from './../../../../primeiro-projeto2/src/app/cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ola',
  templateUrl: './ola.component.html',
  styleUrls: ['./ola.component.css']
})
export class OlaComponent implements OnInit {

  cursos: any[] = [];
  pagina!: number;
  inscricao: Subscription = new Subscription;

  constructor(
    private CursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina']
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  proximaPagina(){
    // this.pagina++;
    this.router.navigate(['/ola'],
    {queryParams: {'pagina': ++this.pagina}});
  }
}
