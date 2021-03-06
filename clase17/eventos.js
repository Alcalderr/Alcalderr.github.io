//capturamos el boton

const boton = document.getElementById('btnAgregar');

//le agregamos un evento
boton.addEventListener('click',function() {
    //tomar el elemento input dado su id
    const titulo = document.getElementById('titulo');

    if (titulo.value) {
        const existeLiEnUl = existe(titulo.value);
        if(!existeLiEnUl) {
            const newLi = document.createElement('li');
            newLi.innerHTML = titulo.value;
            newLi.id = Math.random(); // [0 1)
        
            //tomar el ul y agregarle un li
            const ul = document.getElementById('articulos');
            ul.appendChild(newLi);
            titulo.value = '';
        }
    }
});

existe = (texto) => {
    const ul = document.getElementById('articulos');
    /*for (const li of ul.childNodes) {
        if(li.textContent === texto) {
            existe = true;
        }
    }
    return existe;
    */
   // some [1,2,3,4]
   return Array.from(ul.childNodes).some(li => li.textcontent === texto )
   
}