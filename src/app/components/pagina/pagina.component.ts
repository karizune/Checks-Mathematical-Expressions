import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  formulario = this.fb.group({
    expression: ['']
  });

  itens:boolean = true;
  expressao:string;
  Pilha = [];

  constructor(
    private fb: FormBuilder,
    private service: Service
  ) {}

  ngOnInit(): void {
  }

  transformAsArray(){
    let array = [];
    this.expressao = this.formulario.get('expression').value;
    for(let i = 0; i < this.expressao.length; i++){
      array.push(this.expressao[i]);
    }
    this.service.pegarExpressao(array);
    this.atualizaVetor();
  }

  atualizaVetor(){
    this.Pilha = [];
    let pilha = this.service.getPilha();
    if(pilha.length == 0){
      this.itens = true;
    }
    else{
      this.itens = false;
    }
    for(let i = 0; i< pilha.length; i++){
      this.Pilha.push(pilha[i]);
    }
  }
}
