Clave: Análisis

Casos de uso -> Historias de usuario

Objetivos
Objetivo a corto plazo -> MVP
Objetivo a mediano plazo -> Vision de negocio a donde queremos llegar 1-3 año
Objetivo a largo plazo -> Que quiero resolver en el mercado

Tienda "Sultano del norte" de abarrotes
Objetivo: Poder gestionar su inventario para determinar productos faltantes, un seguimiento a los productos más vendidos, actualización de costos.

Objetivo a mediano plazo

- Actores

  - Usuarios que se identifican en el sistema <-
  - Productos <- Catalogo
  - Salida del inventario <- Evento
  - Precios <- Relación producto-precio
  - Alta de producto a inventario <- Evento

- Metodología Ágil

- TDD -> BDD => Test-Driven Development - Behaviour driven development

Nota: TDD nos permite crear bajo la demanda o necesidad y no bajo el pensamiento abstracto de solución

## Casos de uso

- Como administrador deseo dar de alta un producto para mantenerlo en mi catalogo principal de productos
  - El producto debe contener las siguientes caracteristicas
    - identificador
    - nombre
    - precio
  - Criterios de aceptación:
    - El nombre del producto solo puede contener letras y numeros
    - El nombre del producto debe contener por lo menos 3 caracteres
    - El producto no debe agregarse si ya existe otro de igual nombre
      - Ejemplo: Jabón roma vs jabón roma
    - El producto no debe superar la cantidad de 100 caracteres para el nombre
    - El precio debe ser mayor a cero

Desarrolla catalogo productos

```
- Crea un modelo
- Crea la base de datos
- Crea la tabla
- Mapea los campos de tabla a nivel codigo
- Genera queries para insertar nuevos productos
- Conecta el modelo a un controlador e inserta los productos
```

Secretaria vs Desarrollador técnico-negocio

Acertividad

Diferenciar las principales caracteristicas de spys, stubs, mocks, fakes. ¿por qué y cuando deberían aplicarse estos escenarios de uso?

clase.propiedad = "valor";
clase.setPropiedad("valor");

propiedad = {
get: () => {},
set: () => {}
}

- Generar (mocks, stubs, spy's) de clases, de propiedades, de metodos

Como probar excepciones
como probar clases externas
como probar mock server

Deuda de confianza a nivel código, deuda de confianza a nivel negocio.

Comprobar que la multiplicación de 2 numeros sea correcta.

Semaforo

1. Rojo: Hacer que la prueba falle
2. Verde: Hacer que funcione con el código minimo necesario
3. Morado: Refactorización.

PO -> Casos de uso -> Criterios de aceptación

Criterios de aceptación -> pruebas unitarias -> QA -> Pruebas funcionales -> Criterios de aceptación -> Desarrollo -> Preproducción -> Producción

- en ocasiones los requerimientos se olvidan y las pruebas son respaldo de que fue una solicitud valida
- validando que negocio funcione
- coverage es el valor administrativo, crear software de bajo riesgo es el valor definitivo

- si no hay claridad en el objetivo (experimental) puede ser que pruebas unitarias nos ean requeridas día 0

- dia 0
- producción
- inestable
