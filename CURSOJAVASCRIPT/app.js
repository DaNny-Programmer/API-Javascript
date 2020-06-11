
const paises = ['Londres', 'New York', 'Madrid', 'París', 'Viena'];


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