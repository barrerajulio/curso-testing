export class Producto {
  private nombre!: string;

  public setNombre(nombre: string) {
    if (nombre.length < 3) {
      return;
    }
    this.nombre = nombre;
  }
}
