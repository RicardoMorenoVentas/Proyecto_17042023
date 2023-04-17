import { Component, EventEmitter, Output } from '@angular/core';
import { Paciente } from 'src/_modelo/Paciente';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css']
})
export class FormularioHijoComponent {

  private _paciente_formulario: Paciente;

  constructor(){
    this._paciente_formulario = new Paciente();
  }

  public get paciente_formulario(): Paciente {
    return this._paciente_formulario;
  }

  public set paciente_formulario(value: Paciente) {
    this._paciente_formulario = value;
  }

  @Output() eventoMPaciente = new EventEmitter<Paciente>();

  mandarNuevoPaciente( a : void ) : void {
    this.eventoMPaciente.emit(this._paciente_formulario);
    this._paciente_formulario = new Paciente();
  }

  reiniciarPaciente( a : void ) : void {
    this._paciente_formulario.resetearPaciente();
  }

}
