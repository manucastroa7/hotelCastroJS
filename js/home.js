/* Lo que quiero hacer es el 
prompt para pedirle NOMBRE, APELLIDO y EDAD a pasajero. 
Luego de eso preguntarle la CANTIDAD DE PASAJEROS que van a ser y CANTIDAD DE NOCHES. 
Y después le pregunte que TIPO HABITACION quiere tomar. 

1-Economica $3500 2-Standard $5000 3-Premium 7000$ . Y quiero que me calcule HABITACION X NOCHES. */


let namePax = ""
let lastNamePax = ""
let edadPax = 0
let cantidadPax = 0
let cantidadNoches = 0

const tipoHabitacion = [

    {
        nombre: "Habitacion Economica",

        valor: 3500,

    },

    {
        nombre: "Habitacion Stanard",

        valor: 5000,

    },

    {
        nombre: "Habitacion Premium",

        valor: 7000,

    }
]


function pasajero(nombre, apellido, edad) {
    this.name = nombre
    this.lastName = apellido
    this.age = edad
    this.saludar = function () {
        let mensaje = `Bienvenido al gran Hotel Avenida ${this.name}, ${this.lastName}`

        return mensaje
    }
}


do {

    namePax = prompt("Introduce tu nombre")
    lastNamePax = prompt("Introduce tu Apellido")
    edadPax = parseInt(prompt("Introduce tu Edad"))

    const pasajeroNuevo1 = new pasajero(namePax, lastNamePax, edadPax)

    console.log(pasajeroNuevo1);


    cantidadPax = prompt("Introduce tu Cantidad de Pasajeros");
    cantidadNoches = prompt("Introduce tu Cantidad de Noches");

    function estadia() {

        let resultado = 'Serán ' + cantidadPax + ' pasajeros y se alojarán ' + cantidadNoches + ' noches'

        return resultado
    }

    console.log(estadia())

    const totalEstadia = (posicionHabitacion, cantidadNoches, cantidadPax) => {

        tipoHabitacion[posicionHabitacion].valor = tipoHabitacion[posicionHabitacion].valor * cantidadNoches

        alert(`Has elegido la opcion ${tipoHabitacion[posicionHabitacion].nombre} y el total de su estadía es ${tipoHabitacion[posicionHabitacion].valor}`)
    }
    opcionPasajero = parseInt(prompt("Ingrese el número de tipo de habitación\n 0: Economy - 3500ARS. \n 1: Standard - 5000ARS. \n 2: Premium - 7000ARS \n 3: Me arrepentí de reservar"))

    console.log("Opcion elegida por el pasajero " + opcionPasajero)

    switch (opcionPasajero) {

        case 0:

            totalEstadia(0, cantidadNoches)

            cantidadNoches = 0

            break;

        case 1:

            totalEstadia(1, cantidadNoches)

            cantidadNoches = 0

            break;

        case 2:


            totalEstadia(2, cantidadNoches)
            cantidadNoches = 0
            break;

        case 3:

            alert("Gracias por ingresar a nuestra pagina")

            break;

        default:

            alert("Su opción no es válida.")

            break;

    }

} while (opcionPasajero != 3)







/* opcionUsuario = parseInt(prompt("Ingrese una opción. 0: Para finalizar. \n 1: Para ingresar dinero. \n 2: Parar retirar dinero \n 3: Desloguearse")) */





/* const totalAPagar = (habitacion, noches) => {

    tipoHabitacion[habitacion].valor =  tipoHabitacion[habitacion].valor * noches

    alert (`El total a pagar es ${tipoHabitacion[habitacion].valor}`)

} */



