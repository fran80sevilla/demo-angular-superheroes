import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  public titulo_footer:string;
  constructor() {
    this.titulo_footer = 'Título del Footer';
   }


  ngOnInit() {
  }

}
