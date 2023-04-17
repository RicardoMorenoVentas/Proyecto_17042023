export class Medico{
  public static id = 0;
  private _id_medico: number;
  private _nombre: string = "";
  private _apellidos: string = "";
  private _dni: string = "";
  private _telefono: string = "";
  private _direccion: string = "";
  private _email: string = "";

  constructor(){
    Medico.id++;
    this._id_medico = Medico.id;
  }

  public get id_medico(): number {
    return this._id_medico;
  }

  public set id_medico(value: number) {
    this._id_medico = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }
  public get direccion(): string {
    return this._direccion;
  }

  public set direccion(value: string) {
    this._direccion = value;
  }

  public get telefono(): string {
    return this._telefono;
  }

  public set telefono(value: string) {
    this._telefono = value;
  }

  public get dni(): string {
    return this._dni;
  }

  public set dni(value: string) {
    this._dni = value;
  }

  public get apellidos(): string {
    return this._apellidos;
  }

  public set apellidos(value: string) {
    this._apellidos = value;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }

  public resetearMedico(){
    this._nombre = "";
    this._apellidos = "";
    this._dni = "";
    this._direccion = "";
    this._email = "";
    this._telefono = "";
  }
}
