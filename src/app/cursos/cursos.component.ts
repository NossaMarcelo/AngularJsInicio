import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  //nomePortal: any;// Aceita tudo
  cursos: string[]=['Java', 'C#', 'Angular2'];


  constructor() { 
    this.nomePortal = 'http://gmail.com';

    //for(let i=0;i<this.cursos.length; i++){
    //  let curso = this.cursos[i];
    //}
    //Vamos traduzir esse código inteiro para o component html.
    //Codigo[ngFOr]
  }

  ngOnInit() {
  }

}
