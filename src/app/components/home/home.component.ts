import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public titulo_web:string;
  public descripcion:string;

  constructor() {
    this.titulo_web = 'Web de Super Héroes';
    this.descripcion = 'Esto es una web dedicada a super héroes';
   }

  ngOnInit() {
  }

}
