import faker from "faker";
import Sinon from "sinon";
import { describe, setup } from "mocha";
import { expect } from "chai";

import { Producto } from "./producto";

describe("Producto", () => {
  let subject: Producto;
  let sandbox: Sinon.SinonSandbox;

  setup(() => {
    subject = new Producto();
    sandbox = Sinon.createSandbox();
  });

  afterEach(() => sandbox.verifyAndRestore());

  it("Producto debe ser una instancia de producto", () => {
    expect(subject).instanceOf(Producto);
  });

  it("Producto debe configurar un nombre", () => {
    const name = faker.name.firstName();
    subject.setNombre(name);
    expect((subject as any).nombre).eq(name);
  });

  it("v2 Producto debe configurar un nombre", () => {
    const name = faker.name.firstName();
    const spy = sandbox.spy();
    Object.defineProperty(subject as any, "nombre", {
      set: spy,
    });
    subject.setNombre(name);
    sandbox.assert.calledWithExactly(spy, name);
  });

  it("nombre no podría ser inicializado si su valor contiene menos de 3 letras", () => {
    const spy = sandbox.spy();
    Object.defineProperty(subject as any, "nombre", {
      set: spy,
    });
    subject.setNombre("as");
    sandbox.assert.notCalled(spy);
  });

  it("Requiero una propiedad que almacene el precio del producto y este precio tiene que ser mayor que cero", () => {
    const consoleStub = sandbox.stub(console, "log");
    subject.precio = 0;
    expect(subject.precio).eq(undefined);
    sandbox.assert.calledWithExactly(consoleStub, "El precio no es válido");
  });

  it("Requiero que el valor cuando es mayor que 0 se inicialice en la variable precio", () => {
    subject.precio = 10;
    expect(subject.precio).eq(10);
  });

  it("Requiero saber el total de la compra de 2 elementos del mismo producto", () => {
    const precioSetSpy = sandbox.spy();
    const precioGetSpy = sandbox.stub();
    Object.defineProperty(subject, "precio", {
      set: precioSetSpy,
      get: precioGetSpy,
    });
    subject.precio = 10;
    precioGetSpy.returns(10);
    expect(subject.geTotal(2)).eq(20);
  });
});
