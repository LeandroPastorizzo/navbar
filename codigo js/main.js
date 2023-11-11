 // MOVIENTO DEL MOUSE EFECTO
 
 const mouseOver = document.querySelector(".contenedor-mouseover")
 const puntero = document.querySelector(".puntero-mouse")
 const barsMenu = document.querySelector(".menu-escrito")

 //creo una variable del item que quiero que se agrande para que puntero me quede en el medio
 let barsMenuGrande = false;
 //cambiar esta linea de codigo para tamaño puntero ///////////////
 const ladoPuntero = 50
 const ladoPunteroGrande = 100
 puntero.style.width = ladoPuntero + "px"
 puntero.style.height = ladoPuntero + "px"
 puntero.style.borderRadius = ladoPuntero + "px"


 mouseOver.addEventListener("mousemove", (e) => {
  // Agregar un retraso de 200 milisegundos al movimiento del mouse
  setTimeout(() => {
    const lado = barsMenuGrande ? ladoPunteroGrande : ladoPuntero;
    puntero.style.top = (e.pageY - (lado / 2)) + "px";
    puntero.style.left = (e.pageX - (lado / 2)) + "px";
  }, 50);
});


 barsMenu.addEventListener("mouseover", () =>{
   puntero.style.width = ladoPunteroGrande + "px"
   puntero.style.height = ladoPunteroGrande + "px"
   puntero.style.border = "8px solid #145A32"
   barsMenuGrande = true ; // para que el puntero me quede en el medio del circulo
 })

 barsMenu.addEventListener("mouseout", () =>{
   puntero.style.width = ladoPuntero + "px"
   puntero.style.height = ladoPuntero + "px"
   puntero.style.border = "2px solid #ffffff";
   barsMenuGrande = false;
 })


 





 // mirar video  min 20:01 para agrandar puntero al pasar por items

 // menu de navegacion 

 document.querySelector(".bars-menu").addEventListener("click", animateBars);

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let menu = document.querySelector(".menu");
let fondoOscuro = document.querySelector(".fondo-oscuro"); // Seleccionar el elemento con la clase "fondo-oscuro"

function animateBars() {
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
  menu.classList.toggle("active");
  fondoOscuro.classList.toggle("activo");

  var menuText = document.querySelector(".menu-text h3");
  if (menu.classList.contains("active")) {
    menuText.textContent = "cerrar";
  } else {
    menuText.textContent = "menu";
  }
}




/*girar imagenes*/

let bleach = document.querySelector("#bleach");
bleach.addEventListener("click",cambiar);

let fotomostrada = "bleach"

function cambiar(){
    bleach.classList.toggle("aparece-bleach")
    bleach = document.getElementById("bleach")
    if(fotomostrada=="bleach"){
        bleach.src= "imagenes\\galeria\\bleachdos.jpg";
        fotomostrada ="bleachdos";
    }
    else { 
        bleach.src="imagenes/galeria/bleach.jpg";
        fotomostrada= "bleach";
    }
};


let evaa = document.querySelector("#eva");
eva.addEventListener("click",cambiar2);

let img21 = "eva"

function cambiar2(){
    eva.classList.toggle("aparece-eva")
    eva = document.getElementById("eva")
    if(img21=="eva"){
      eva.src = "imagenes\\galeria\\evados.jpg"; 
      img21="eva2" 
    }
    else{
        eva.src="imagenes/galeria/eva01.jpg";
        img21="eva";
    }
};





let goku = document.querySelector("#goku");
goku.addEventListener("click",cambiar3);

let imag2= "goku"
function cambiar3(){
    goku.classList.toggle("aparece-goku")
    goku = document.getElementById("goku")
    if(imag2=="goku"){
        goku.src="imagenes\\galeria\\gokudos.jpg"
        imag2="goku2"
    }
    else{
        goku.src="imagenes/galeria/goku.jpg"
        imag2="goku"
    }
};







let ikki = document.querySelector("#ikki");
ikki.addEventListener("click",cambiar4);

let img3 = "ikki"

function cambiar4(){
    ikki.classList.toggle("aparece-ikki")
    ikki = document.getElementById("ikki")
    if(img3=="ikki"){
        ikki.src="imagenes\\galeria\\ikkidos.jpg"
        img3="ikki2"
    }
    else{
        ikki.src="imagenes/galeria/ikki.jpg"
        img3="ikki"
    }
};


let mikasa = document.querySelector("#mikasa");
mikasa.addEventListener("click", cambiarMikasa);

let img4 = "mikasa";

function cambiarMikasa() {
  mikasa.classList.toggle("aparece-mikasa");
  mikasa = document.getElementById("mikasa");
  if (img4 == "mikasa") {
    mikasa.src = "imagenes/galeria/mikasados.jpg";
    img4 = "mikasa2";
  } else {
    mikasa.src = "imagenes/galeria/mikasa.jpg";
    img4 = "mikasa";
  }
}


let sakura = document.querySelector("#sakura");
sakura.addEventListener("click",cambiar5);

let img7 ="sakura";

function cambiar5(){
    sakura.classList.toggle("aparece-sakura");
    sakura = document.getElementById("sakura");
    if(img7=="sakura"){
        sakura.src="imagenes\\galeria\\/sakurados.jpg"
        img7="sakura2";
    }
    else{
        sakura.src="imagenes\\galeria\\sakura.jpg"
        img7="sakura";
    }
};



// scroll reveal 

let animado = document.querySelectorAll(".animado");

function mostrarScroll (){
  let scrollTop = document.documentElement.scrollTop;
  for ( let i=0; i< animado.length; i++){
    let alturaAnimado = animado [i].offsetTop;
    if (alturaAnimado > scrollTop){
      animado[i].style.opacity = 1
      animado[i].classList.add("mostrarArriba")
    }
  }
}
window.addEventListener("scroll", mostrarScroll);



let animado2 = document.querySelectorAll(".animado2");
let lastScrollTop = 0;
let initialScroll = true; // Variable para controlar el primer desplazamiento

function mostrarScroll2() {
  let scrollTop2 = document.documentElement.scrollTop;

  if (initialScroll) {
    // Primer desplazamiento
    initialScroll = false; // Se establece a false para futuros desplazamientos
  } else {
    if (scrollTop2 > lastScrollTop) {
      // Scrolleo hacia abajo
      for (let i = 0; i < animado2.length; i++) {
        let alturaAnimado2 = animado2[i].offsetTop;
        if (alturaAnimado2 > scrollTop2) {
          animado2[i].style.opacity = 0.1;
        }
      }
    } else {
      // Scrolleo hacia arriba
      if (scrollTop2 === 0) {
        // Llegó al inicio de la página
        for (let i = 0; i < animado2.length; i++) {
          animado2[i].style.opacity = 1;
        }
      }
    }
  }

  lastScrollTop = scrollTop2;
}

window.addEventListener("scroll", mostrarScroll2);
