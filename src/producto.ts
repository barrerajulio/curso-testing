export class Producto {
  private nombre!: string;
  private _precio!: number;

  public set precio(value: number) {
    if (value <= 0) {
      console.log("El precio no es válido");
      return;
    }
    this._precio = value;
  }

  public get precio() {
    return this._precio;
  }

  public setNombre(nombre: string) {
    if (nombre.length < 3) {
      throw new Error("Se esperaba un nombre mayor a 3 letras");
    }
    this.nombre = nombre;
  }

  public geTotal(cuantos: number) {
    return this.precio * cuantos;
  }
}
