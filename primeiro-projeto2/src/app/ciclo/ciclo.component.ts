import { AfterContentChecked,OnChanges, DoCheck,AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('contructor');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }


  ngOnChanges(){
    this.log('ngOnChange');
  }

  ngOnInit(){
    this.log('ngOnInit');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterViewCheched(){
    this.log('ngAfterViewCheched');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string){
  console.log(hook);
  }
}
