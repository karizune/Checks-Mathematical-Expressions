import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  //variaveis
  pilha = [];
  parenteseAberto: number;
  colcheteAberto: number;
  chavesAberto:number;
  errorMessage: string;

  constructor() { }

  pegarExpressao(pilha){
    this.pilha = pilha;
    if(this.pilha.length != 0){
      //chaves
      
      //colchetes
      //parenteses
      if(this.verificaParenteses()){
        window.alert(this.errorMessage);
      }
      else{
        window.alert(this.errorMessage);
      }
    }
    else{
      window.alert("Sem Caracteres para verificar");
    }
    console.log(this.pilha);
  }

  verificaParenteses(){
    this.parenteseAberto = 0;
    let i;
    for(i = 0; i<this.pilha.length; i++){
      if(this.pilha[i] == "{" || this.pilha[i] == "["){
        this.pilha.splice(i,1,"(");
      }
      if(this.pilha[i] == "}" || this.pilha[i] == "]"){
        this.pilha.splice(i,1, ")");
      }
      if(this.pilha[i] == ")" && this.parenteseAberto <= 0){
        this.errorMessage = "separador fechando sem ter um aberto";
        return false;
      }

      if(this.pilha[i] == "("){
        this.parenteseAberto++;
      }
      else if(this.pilha[i] == ")" && this.parenteseAberto > 0){
        this.parenteseAberto--;
      }
    }
    if(this.parenteseAberto > 0){
      this.errorMessage = "Separador aberto sem ter fechamento";
      return false;
    }
    this.errorMessage = "A expressão está correta"; 
    return true;
  }
  
  getPilha(){
    return this.pilha;
  }
}
