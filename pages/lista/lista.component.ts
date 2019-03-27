import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './lista.component.html'
})
export class ListaComponent {

  public title:string = "Lista";

  mensagem:string = "Olá, mundo!";

  public editar():void {
    this.title = "Hello World!";
  }

}