let cantCuotas = 12;
let interes = 1.20;

/* Funcion para calcular el descuento sobre el producto con cupon de descuento */
const descuento = (a) => a - a * 0.35;
/* Funcion para calcular precio por cuota sobre 12 cuotas */
const cuotas = (a, b, c) => a / b * c;
/* Ingresa cupon de descuento y aplica descuento*/
function cupon(){
    let precioProducto = parseFloat(prompt("ingrese el valor de la entrada"));
    let cuponDescuento = (prompt("Si tiene cupon de descuento ingreselo")).toUpperCase();
    if(cuponDescuento){
        if(cuponDescuento === "DESCUENTO35") {
            precioProducto = descuento(precioProducto);
            alert(`Precio final con descuento $${Math.ceil(precioProducto)}`);
        }else {
            alert("Cupon no valido");
        }
    }
    /* Muestra precio de producto final en cuotas */
    let precioCuotas = cuotas(precioProducto, cantCuotas, interes);
    alert(`El precio por cuotas es $${Math.ceil(precioCuotas)}`);
}

alert("Elegir tipo de entrada:");
let opcionEntrada = parseInt(prompt("Opción 1 = Peppa Pigg $1500 // Opción 2 = Topa y Muni $5000// Opción 3 = Las Tortugas Ninjas $600"));

while(parseInt(opcionEntrada)){
    switch(opcionEntrada){
        case 1:
        alert("Peppa Pigg $1500");
        cupon();
        break;

        case 2:
        alert("Topa y Muni $5000");
        cupon();
        break;

        case 3:
        alert("Tortugas Ninjas $600");
        cupon();
        break;
    }
    alert("En caso de no comprar más epretar ESC");
    opcionEntrada = parseInt(prompt("Opción 1 = Peppa Pigg $1500 // Opción 2 = Topa y Muni $5000// Opción 3 = Las Tortugas Ninjas $600"));
}