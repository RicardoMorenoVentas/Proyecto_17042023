import { Component } from '@angular/core';
import { Paciente } from 'src/_modelo/Paciente';

@Component({
  selector: 'app-lista-padre',
  templateUrl: './lista-padre.component.html',
  styleUrls: ['./lista-padre.component.css']
})
export class ListaPadreComponent {
  private _lista_pacientes: Array<Paciente> = [];

  public get lista_pacientes(): Array<Paciente> {
    return this._lista_pacientes;
  }
  public set lista_pacientes(value: Array<Paciente>) {
    this._lista_pacientes = value;
  }

  addPaciente(paciente_e : Paciente) : void {
    this._lista_pacientes.push(paciente_e);
  }
}
