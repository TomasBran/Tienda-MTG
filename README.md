# Tienda Magic The Gathering
## Hecho en ReactJS por Tomás Bran


Este proyecto es un e-commerce del famoso juego de cartas Magic The Gathering.

## Features

- Menú principal con todas las cartas. Expandible sumando los datos correspondientes a la db de firebase.
- Menú por categorías. (Comunes, Poco comunes, Raras y Míticas)
- Buscador de cartas.
- Zoom/preview a las imágenes de las cartas.
- Cartas detalladas.
- Alertas visuales en cada una de las acciones.
- Alertas en las acciones que no se pueden ejecutar (error/warning).
- Carro con vista para eliminar objetos individual o colectivamente.
- Confirmación de elección para decisiones importantes.
- **Posibilidad de cambio de lenguaje en TODO el entorno, (ubicado arriba a la derecha), manteniendo los textos originales de las cartas en sus respectivos idiomas oficiales. (Nombre, tipo, efecto, etc)**

## Modo de uso

Es un e-commerce típico, en el cual seleccionás el producto, elegís la cantidad que quieras, (recordando que la cantidad máxima de misma carta en un mazo es 4, pero hay gente que compra para revender), vas al carro, corroborás que sea todo lo que necesitás, y vas al checkout.

## Dependencias

Utilizo las librerías visuales Toastify y Sweet Alerts, y está la base de datos alojada en Firebase.

## A tener en cuenta (Profesor)

- Los datos de la Firebase están también incluidos y comentados en el archivo "./src/service/firebase/firebaseConfig.js".
- Dentro del checkout un reset de stocks, por si estás testeando y te quedás sin stock (50 es la base con la que empieza cada carta). No es muy probable que te suceda, pero mejor tener la solución a mano a no tenerla.
- Los precios en USD de las cartas pueden no ser los mismos del día de corrección. Si los datos fueran de una API, se podría actualizar con mayor facilidad.
