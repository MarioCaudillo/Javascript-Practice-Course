const h1    =   document.querySelector('h1'); //selecciona el elemento especifico a partir de su etiqueta en HTML
const parrafo = document.querySelector('.parrafo');//selecciona el elemento por su clase usando el punto
const pid = document.querySelector('#pid');//selecciona elemento HTML por su identificador
const input = document.querySelector('input');//seleeciona elemento HTML por su etiqueta

console.log({
    h1,
    parrafo,
    pid,
    input
});
console.log(h1);
console.log(input.value);//imprime en consola el valor del atributo.value


h1.innerText = "Hotline suicida" //.innerText canmbia el valor de un elemento de texto HTML
parrafo.innerHTML = "this is an <br> paragraph" //.innerHTML modifica el texto pero lo hace en codigo HTML, lo que es peligroso
h1.getAttribute('panatalla');//Lee el valor del atributo dado en el HTML
console.log(h1.getAttribute('pantalla'));//imprimiendo valor
h1.setAttribute('pantalla', 'Samsung');//modifica el valor del atributo insrrtando clase y valor como parametro dentro de el
console.log(h1.getAttribute('pantalla'));//imprime nuevo valor

h1.classList.add('LG');//agrega a la lista de clases del elemento HTML una nueva clase y su nombre
console.log(h1);//imprimiendo valor
h1.classList.remove('LG');//elimina de la lista de clases
console.log(h1);//imprimiendo valor

input.value = "Jesus Walks, Mr West." //da un valor por defecto al elemento input en este caso

document.createElement('img');//este metodo crea un elemento HTML del tipo que especifiquemos
console.log(document.createElement('img'));//imprimiendo valor

const img   =   document.createElement('img');//creando una imagen y guardandola
img.setAttribute('src', '/img/kanye.jpg');//dandole un valor al metodo por medio de los parametros HTML necesarios
console.log(img);//imprime valor

pid.append(img);//acomoda el elemento img en el ID "pid" declarado en nuestro HTML

