document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e) {
    e.preventDefault();

    const origin = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    console.log(cantidad);

    let url = '';
    url += 'https://uinames.com/api/?';

    if(origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;

    }

    if(generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;

    }

    if(cantidad !== '') {
        url += `amount=${cantidad}&`;

    }


    console.log(url);
}