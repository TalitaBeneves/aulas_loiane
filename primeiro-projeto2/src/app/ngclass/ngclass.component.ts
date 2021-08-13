import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  myFavorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickMyFavorite(){
    this.myFavorite= !this.myFavorite;
  }

}
