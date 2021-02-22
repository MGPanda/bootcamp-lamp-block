/*De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta json-server --watch exercise-3.json y obtendremos de la url http://localhost:3000 los datos del ejercicio.

En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

El endpoint http://localhost:3000/orders nos devolverá una lista de pedidos de la tienda Mari & Juan y el endpoint http://localhost:3000/products que nos devuelve una lista de productos.

La intención es pintar todos los pedidos ordenados por fecha y en los que pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida . Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, por ejemplo http://localhost:3000/products/2. De esta forma podremos obtener ya toda la información y pintarla en el html.*/

const main$$ = document.querySelector("main");

const getProductName = (id) => {
  let productName;
  fetch("http://localhost:3000/products")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        const element = res[i];
        if (element.id == id) {
          console.log(`${element.id} = ${id}, ${element.name}`);
          productName = element.name;
        }
      }
    });
  return productName;
};

fetch("http://localhost:3000/orders")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      const orderDiv$$ = document.createElement("div");
      orderDiv$$.classList.add("orderDiv");
      orderDiv$$.innerHTML = `<h2>${element.date}</h2><h1>Pedido nº${element.id}</h1>`;

      for (let j = 0; j < element.products.length; j++) {
        const product = element.products[j];
        const p$$ = document.createElement("p");
        p$$.textContent = `· ${getProductName(product.productId)} (x${
          product.quantity
        })`;
        orderDiv$$.appendChild(p$$);
      }

      main$$.appendChild(orderDiv$$);
    }
  });
