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
});
