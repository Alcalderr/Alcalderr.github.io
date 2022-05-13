async function getUserData(pagina) {
    const response = await axios.get(`https://reqres.in/api/users?page=$(pagina)`);
    
    console.log(response);
    return response;
}

//asociar al boton un evento
const btn = document.getElementById('btnGetData');

//asocio el evento click

btn.addEventListener('click',async() => {
    const paginaInput = document.getElementById('pagina');
    if(!paginaInput.value) {
        alert('ingrese pagina a buscar');
        return;
    }
    const response = await getUserData(+paginaInput.value);
    
    //AXIOS retorna objet.data > json que viene del servidor
    const jsonData = response.data // ojo no es el  data

    // SOLO VOY A TOMAR DEL OBJETO
    const jsonDataMapped = jsonData.data.map((x) =>{
        return {
            avatar: x.avatar,
            name: x.first_name,
            id: x.id
        }
    });
    

    //clonar el div que esta en el documento html

    //recorrer jsonDataMapped

    //para cada uno de los datos de la card
    
    //actualizar el html con todos los card



    //puedo actualizar el div con jsonData
    const jsonDataAsText = JSON.stringify(jsonDataMapped);
    
    //actualizo el valor del div
    //capturo el div por su id
    const divEnHtml = document.getElementById('content');
    divEnHtml.innerHTML = jsonDataAsText;
});