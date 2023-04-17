import { Component } from '@angular/core';
import { Medico } from 'src/_modelo/Medico';

@Component({
  selector: 'app-formulario-padre',
  templateUrl: './formulario-padre.component.html',
  styleUrls: ['./formulario-padre.component.css']
})
export class FormularioPadreComponent {
  private _medico_out: Medico | undefined;
  private _medico_actual: Medico = new Medico();

  public get medico_actual(): Medico {
    return this._medico_actual;
  }
  public set medico_actual(value: Medico) {
    this._medico_actual = value;
  }
  public get medico_out(): Medico {
    return this._medico_out!;
  }
  public set medico_out(value: Medico) {
    this._medico_out = value;
  }

  mandarMedico(a: void): void {
    this._medico_out = this._medico_actual;
    this._medico_actual = new Medico();
  }

  reiniciarMedico(a: void): void {
    this._medico_actual!.resetearMedico();
  }

}
