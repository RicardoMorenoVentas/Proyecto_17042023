import { Component , OnInit } from '@angular/core';
import { Arrays_ejemplo } from 'src/_modelo/Arrays';
import { Enumerado1 } from 'src/_modelo/Enumerados';
import { Ejemplo_UnionTipos } from 'src/_modelo/Union_tipos';

@Component({
  selector: 'app-fundamento-ts',
  templateUrl: './fundamento-ts.component.html',
  styleUrls: ['./fundamento-ts.component.css']
})

export class FundamentoTSComponent implements OnInit {


  private _unionPractico: string | number = "Prueba";

  private _unionPractico2: Tipos = "Prueba2";

  private _unionValor: RangoNumerico = 1;

  private _enumerado: string | number = Enumerado1.primer;

  public get unionValor(): RangoNumerico {
    return this._unionValor;
  }

  public set unionValor(value: RangoNumerico) {
    this._unionValor = value;
  }

  public get enumerado(): string | number {
    return this._enumerado;
  }

  public set enumerado(value: string | number) {
    this._enumerado = value;
  }


  public get unionPractico2(): Tipos {
    return this._unionPractico2;
  }

  public set unionPractico2(value: Tipos) {
    this._unionPractico2 = value;
  }

  public get unionPractico(): string | number {
    return this._unionPractico;
  }
  public set unionPractico(value: string | number) {
    this._unionPractico = value;
  }

  constructor(){}

  ngOnInit(): void {
    let arrays_ejemplo = new Arrays_ejemplo();
    let union_tipos_ejemplo = new Ejemplo_UnionTipos();
    // Al intentar hacer esto, nos da error =>  this._unionValor = 6;
  }

  cambioEnumerado ( a : void ) : void {

    for (let index = 0; index < Object.keys(Enumerado1).length; index++) {
      let valor : string = Object.keys(Enumerado1)[index];
      if (Object.keys(Enumerado1)[Object.values(Enumerado1).indexOf(valor)] == this._enumerado){
        if ((index+1) < Object.keys(Enumerado1).length){
          this._enumerado = Object.keys(Enumerado1)[Object.values(Enumerado1).indexOf(Object.keys(Enumerado1)[index+1])]
        }else{
          this._enumerado = Object.keys(Enumerado1)[Object.values(Enumerado1).indexOf(Object.keys(Enumerado1)[0])]
        }
        break;
      }

    }
  }

  cambioTipo( a : void ) : void {
    this._unionPractico = typeof this._unionPractico == 'number' ? 'Prueba' : 10;

    if (typeof this._unionPractico2 == 'number'){
      this._unionPractico2 = false;
    }else if (typeof this._unionPractico2 == 'boolean'){
      this._unionPractico2 = 'Prueba2';
    }else{
      this._unionPractico2 = 30;
    }

  }

  retornarTipo( a : void ) : string {
    return typeof this._unionPractico;
  }

  retornarTipo2 ( a : void ) : string {
    return typeof this._unionPractico2;
  }

  retortarTipoEnumerado ( a : void) : string {
    return typeof this._enumerado;
  }



}

type Tipos = string | number | boolean;

type RangoNumerico = 1 | 2 | 3 | 4 | 5;
