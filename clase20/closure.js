function outer() {
    const a = 23;
    function inner() {
        console.log(a);
    }
    inner();
}

//¿invocar > inner ? outer ?

// outer > por fuera por ende es a quien debo llamar primero
// inner > esta dentro de outer por ende es invocada por esta

document.getElementById('btn').addEventListener('click',()  => {
    outer();
})

//F12 EN EL NAVEGADOR

//EN LA PESTAÑA SOURCE, tienen html, css, js

//ctrl+p busco archivo que quiero "debugar"

//selecciono la linea y hago click para agregar un "breakpoint"

//CON F10 AVANZO PASO A PASO LINEA A LINEA
// con F11 "entro" en la función


/* FUNCION QUE SUME DOS VALORES */
function adder(first) { //5
    function add(secound) {
        console.(first+secound));
    }
    return add;
}

document.getElementById('btn').addEventListener('click',()  => {
    const primerLlamado = adder(10); //> 
    primerLlamado(5); // invoco a la funcion que me retorno la primer invocacion
});