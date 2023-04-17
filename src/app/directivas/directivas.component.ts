import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  private _bool: boolean = false;

  private _array: Array<string> = ['Primero', 'Segundo', 'Tercero', 'Cuarto'];

  private _numberSwitch: number = 1;

  constructor(){}

  public get numberSwitch(): number {
    return this._numberSwitch;
  }

  public set numberSwitch(value: number) {
    this._numberSwitch = value;
  }

  public get array(): Array<string> {
    return this._array;
  }

  public set array(value: Array<string>) {
    this._array = value;
  }

  public get bool(): boolean {
    return this._bool;
  }
  public set bool(value: boolean) {
    this._bool = value;
  }

  cambiarBool(a : void) : void {
    this._bool = ! this._bool;
  }

  sumarNumero( a : void ) : void {
    if (this._numberSwitch < 4){
      this._numberSwitch++;
    }else{
      this._numberSwitch = 1;
    }
  }
}
