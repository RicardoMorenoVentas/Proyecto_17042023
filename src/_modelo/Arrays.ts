export class Arrays_ejemplo {

  private _array: Array<string> = ["Pepe", "Maria", "Juana"];

  constructor(){
    this.lengthArray();
    this.addToArray();
    this.lengthArray();
    this.joinTheArray();
    this.popArray();
    this.reverseArray();
  }

  private addToArray() {
    console.log(`El array es: ${this._array}`)
    console.log('Se va a añadir uno');
    this._array.push('Ambrosio');
    console.log(`El array actual es: ${this._array}`)
  }

  private joinTheArray() {
    console.log(`Se va a hacer un join del array: ${this._array.join(',')}`);
  }

  private popArray() {
    console.log(`Se ha eliminado el último elemento, que es: ${this._array.pop()}`);
  }

  private lengthArray() {
    console.log(`El length del array es de: ${this._array.length}`);
  }

  private reverseArray() {
    console.log(`El array al revés es: ${this._array.reverse()}`)
  }
}
