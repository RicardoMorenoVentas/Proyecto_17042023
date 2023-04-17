export class Ejemplo_UnionTipos {

  private _tipo1 : number | string = 10;

  constructor(){
    console.log('La unión de tipos nos permite que un atributo o variable pueda tener 2 posibles o más tipos de primitivo')
    console.log(`En este ejemplo, el objeto llamado '_tipo1', está asignado como un número: ${this._tipo1}`)
    console.log(`Imprimimos el typeof de '_tipo1': ${typeof this._tipo1}`)
    this._tipo1 = "Prueba";
    console.log(`Ahora le hemos cambiado su valor a uno de tipo string: ${this._tipo1}`)
    console.log(`Imprimimos el typeof de '_tipo1': ${typeof this._tipo1}`)

  }
}
