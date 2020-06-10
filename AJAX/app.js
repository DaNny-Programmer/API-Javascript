document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    const xhr  = new XMLHttpRequest();
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange = function(){
        console.log(`Estado ${this.readyState}`);
        if(this.readyState === 4 && this.status ===200) {
            //console.log(this.responseText);
        }

    /*
    0 No inicializado
    1 conexion establecida
    2 recibido
    3 procesado
    4 respuesta lista
    */
    }
    xhr.send();
}