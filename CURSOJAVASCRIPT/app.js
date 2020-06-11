
/*const paises = ['Londres', 'New York', 'Madrid', 'París', 'Viena'];


function nuevoPais(pais, colback){
    setTimeout(function(){
        paises.push(pais);
        colback();

    }, 2000);
}
function mostrarPaíses() {
    setTimeout(function() {
        let html ='';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;

        });
        document.getElementById('app').innerHTML = html;

    }, 1000);
}

nuevoPais('Alemania', mostrarPaíses);

mostrarPaíses();

const esperando = new Promise(function(resolve, reject ) {
    setTimeout(function() {
        resolve('Se ejecuto');

    }, 5000);

});
esperando.then(function(mensaje) {
    console.log(mensaje);

})*/

const aplicarDescuento = new Promise(function(resolve, reject ) {
    const descuento = false;
    if(descuento) {
        resolve('Descuento Aplicado');

    }else {
        reject('No se puede aplicar el descuento');
    }

});

aplicarDescuento.then(function(resultado){
    console.log(resultado);
}).catch (function(error){
    console.log(error);
});