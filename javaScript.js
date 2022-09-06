//VARIABLES

let inputPrincipal = document.querySelector(".input")

let agregar = document.querySelector(".boton-agregar")

let contenedor = document.querySelector(".container")

class Item {
        constructor (nuevaTarea) {
            this.crearDiv(nuevaTarea)
        }
        crearDiv(nuevaTarea){
 
        // CREANDO INPUT 
        let inputItem = document.createElement("input")
        inputItem.setAttribute("type", "text")
        inputItem.disabled = true
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea

        // CREANDO NUEVO DIV
        let nuevoDiv = document.createElement("div")
        nuevoDiv.classList.add("item")

    // CREANDO BOTON EDITAR
        let botonEditar = document.createElement("button")


        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"

        botonEditar.classList.add("boton-editar")

        //CREANDO BOTON BORRAR

        let botonRemover = document.createElement("button")


        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"

        botonRemover.classList.add("boton-remover")

        //AGREGAR ELEMENTOS A LA LISTA:
        contenedor.appendChild(nuevoDiv)
        nuevoDiv.appendChild(inputItem)
        nuevoDiv.appendChild(botonEditar)
        nuevoDiv.appendChild(botonRemover)

        //AGREGANDO EVENTOS:
    botonEditar.addEventListener("click" , function(){
        inputPrincipal.disabled = false

            if(inputItem.disabled){

                this.innerHTML = "<i class='fas fa-lock-open'></i>"
                inputItem.disabled = false
            } else {
                inputItem.disabled = true
                this.innerHTML = "<i class='fas fa-lock'></i>"
            }
    })

    botonRemover.addEventListener("click", function(){
        contenedor.removeChild(nuevoDiv)
    })

        }
            }

     function chequearInput (){

    if (inputPrincipal.value != false) {
       new Item(inputPrincipal.value)
       inputPrincipal.value = ""

    }}


agregar.addEventListener("click", chequearInput)