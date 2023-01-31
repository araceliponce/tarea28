import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {


  //+++
  hide=true;


  valorA: number=0;
  valorB: number=0;
  sumar=false;
  restar=false;
  multiplicar=false;
  dividir=false

  respuestaNumero = 0;
  respuestaTexto = 'Escribe dos numeros y selecciona una operacion';
  respuesta= this.respuestaTexto;


  sumaRes= 0;
  restaRes= 0;
  multiRes= 0;
  divRes= 0;
  // respuestas:string = "";
  datos = new Array();

  Enviar(){ 
    this.respuesta='';
   
      if(this.sumar){
        // alert('suma')
        // alert(this.valorA)
        // alert(this.valorB)

        this.respuestaNumero = this.valorA + this.
        valorB;
        return this.respuestaNumero;
      }
      if(this.restar){
        this.respuestaNumero = this.valorA - this.valorB;
        return this.respuestaNumero;

      }
      if(this.multiplicar){
        this.respuestaNumero = this.valorA * this.valorB;
        return this.respuestaNumero;

      }
      if(this.dividir){
        this.respuestaNumero = this.valorA / this.valorB;
        return this.respuestaNumero;

      } else{
        alert('Debes seleccionar una operacion');
        this.respuestaNumero = 0;
        return this.respuestaNumero;

      }
  }

  //esta es una funcion que retorna un mensaje de error
  msg='';
  getErrorMessage(){
    this.msg= 'Ingrese un valor numérico';
    return this.msg
  }
}
