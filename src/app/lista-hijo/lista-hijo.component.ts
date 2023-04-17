import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Medico } from 'src/_modelo/Medico';


@Component({
  selector: 'app-lista-hijo',
  templateUrl: './lista-hijo.component.html',
  styleUrls: ['./lista-hijo.component.css']
})
export class ListaHijoComponent implements OnChanges {

  private _lista_medicos: Array<Medico> = [];

  @Input() recibirPacEvent: Medico | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof this.recibirPacEvent  != 'undefined'){
      this._lista_medicos.push(this.recibirPacEvent!);
    }
  }

  public get lista_medicos(): Array<Medico> {
    return this._lista_medicos;
  }
  public set lista_medicos(value: Array<Medico>) {
    this._lista_medicos = value;
  }
}
