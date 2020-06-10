document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e) {
    e.preventDefault();

    const origin = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;



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

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if(this.status === 200) {
            const nombres = JSON.parse( this.responseText );

            let htmlNombres = '<h2>Nombres Generados</h2>';

            htmlNombres += '<url class="lista">';
            nombres.forEach(function(nombre) {
                htmlNombres += `
                    <li>${nombre.name}<li>

                
                `;

                
            });



            htmlNombres += '</ul>'
            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }
}