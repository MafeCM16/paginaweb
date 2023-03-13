function inicio() {
  menu();
  initEventos();
  
}

function initEventos() {
  // eventos
  [... document.getElementsByClassName("container-item")].forEach((item)=>{    
    item.addEventListener("click", ()=>{
      mostrarOcultarSubmenu(item);
    })
  });
}

function mostrarOcultarSubmenu(idElementoOculto){
  [... document.getElementsByClassName("container-item")].forEach((item)=>{
    if(!item.children[2].classList.indexOf("open")){
      item.children[2].classList.add("close");
    }
    
    
  })

  idElementoOculto.children[2].classList.toggle("open");
  idElementoOculto.children[2].classList.toggle("close");


  // idElementoOculto.children[2].classList.toggle("open");
  // idElementoOculto.children[2].classList.toggle("close");
}

// function ocultar(){

// }

inicio();
