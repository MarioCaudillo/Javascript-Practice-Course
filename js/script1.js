const h1    =   document.querySelector('h1');//construimos los selectores de los elementos a usar del HTML
const form  =   document.querySelector('#form');
const anotherInput  =   document.querySelector('#anotherInput');
const input1    =   document.querySelector('#calculate1');
const input2    =   document.querySelector('#calculate2');
const calculateBtn    =   document.querySelector('#calculateButton');
const pResult     =   document.querySelector('#result');
const pReturn = document.querySelector('#result');

calculateBtn.addEventListener('click', btnONclick);//addEventListener es un metodo que recibe un tipo de evento y la
                                                    //la funcion que ejecutara al accionarse ese evento
form.addEventListener('submit', btnONclick);//el evento submit es para elementos FORM

function btnONclick(event){ //nuestra funcion recibe el parametro de event
    console.log("listenning click event");
    event.preventDefault();//.prevenrDefault tiene la funcion de evitar el refresh automatico de la pagina al dar submit en el form
    const  addresult = input1.value + input2.value;  
    console.log(addresult);

    pResult.innerText   =   "Resultado: " + addresult;//pResult generara el resultado del elemento html con innerText
}

anotherInput.addEventListener('mouseenter', tryingEvents);

function tryingEvents(event){
    event.preventDefault();
    
    pResult.innerText   =   "You're using a mouse event!"
}

