//capturo el elemento html
const btnAdd = get('btnAdd');
let articulosInLocalStorage = [];

//asociar al boton un evento: click
btnAdd.addEventListener('click', function() {
    //capturo el input
    const inputTitulo = get('titulo');

    const valor = inputTitulo.value;
    //validacion si valor!==''

    if(valor !== '') {
        // tomo el ul
        const ul = get(listado);
        // crear un e lement <li>
        const li = document.createElement('li');
        li.innerHTML = valor;
        //agregar un id y un class
        li.id = Math.random(); // [0,1)
        li.className = 'miEstilo';
        
        //agregarle al ul el elemento
        ul.appendChild(li);
        
        //limpio
        inputTitulo.value = ''; 
        inputTitulo.focus();
        
        articulosInLocalStorage.push(valor);
        localStorage.setItem('articulos', JSON.stringify(articulosInLocalStorage));
    }
});

function get(id) {
    return document.getElementById (id);
}

//al body le asociamos un evento load
const body = document.getElementsByTagName('body')[0];

//body.addEventListener('load',() => {
    function renderArticulos() {

    // 1 - tomar del localstorage la clave articulos
    const articulos = localStorage.getItem('articulos');
    let arrayArticulos = [];

    if(articulos) {
        // 2 - convertir el texto a objeto JSON.parse(...)
        arrayArticulos = JSON.parse(articulos); // ['1','2','etc']
        // 3 - invocar una funcion que dibuje otra vez los li dentro del ul
        for (const texto of arrayArticulos) {
            agregarLiAUL(texto);
        }
    }
    articulosInLocalStorage = arrayArticulos;
});

function agregarLiAUL(valor) {
    // tomo el ul
    const ul = get(listado);
    // crear un e lement <li>
    const li = document.createElement('li');
    li.innerHTML = valor;
    //agregar un id y un class
    li.id = Math.random(); // [0,1)
    li.className = 'miEstilo';
    
    //agregarle al ul el elemento
    ul.appendChild(li);
}

//invoco la funcion
renderArticulos();