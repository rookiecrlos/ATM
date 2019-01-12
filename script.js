// Clase caja para la creación del dinero
class Billete {
    constructor(valor, cantidad) {
        this.Valor = valor;
        this.Cantidad = cantidad;
    }
}

// Arreglo para almacenar el dinero
var caja = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

var cantidadDeBilletesAEntregar = 0,
    division = 0,
    entregaTotalDeBilletes = []; // Arreglo para entrega final del dinero

function extraerDinero() {

    var t = document.getElementById('dinero');
    dineroSolicitado = parseInt(t.value);

    for (var billeteEnCaja of caja) {

        if (dineroSolicitado > 0) {

            division = Math.floor(dineroSolicitado / billeteEnCaja.Valor);

            if (division > billeteEnCaja.Cantidad) {
                cantidadDeBilletesAEntregar = billeteEnCaja.Cantidad;
            } else {
                cantidadDeBilletesAEntregar = division;
            }

            entregaTotalDeBilletes.push(new Billete(billeteEnCaja.Valor, cantidadDeBilletesAEntregar));
            dineroSolicitado = dineroSolicitado - (billeteEnCaja.Valor * cantidadDeBilletesAEntregar);
        }
    }

    if (dinero > 0) {

        //Si el dinero no es suficiente muestra este mensaje
        console.log('Soy un cajero pobre y me falta dinero.');

    } else { // De lo contrario muestra los billetes

        for (var e of entregaTotalDeBilletes) {
            if (e.Cantidad > 0) {
                resultado.innerHTML += e.Cantidad + ' billetes de $' + e.Valor + '<br/>';
            }
        }
    }
}

var resultado = document.getElementById('resultado');
var boton = document.getElementById('extraer');
boton.addEventListener('click', extraerDinero);