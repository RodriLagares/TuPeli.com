        const peliculas = [
            
        { 
            id: 1,
            nombre: "Breaking Bad",
            precio: 15000
        },
        { 
            id: 2,
            nombre: "You",
            precio: 13500
        },
        { 
            id: 3,
            nombre: "13 Reasons Why",
            precio: 14500
        },
        { 
            id: 4,
            nombre: "Happy Gilmore",
            precio: 16000
        },
        ]

            let cartPeliculas = []
            let peliculasContainer = document.getElementById("peliculas-container")

            function renderPeliculas(peliculasArray){
                peliculasArray.forEach(pelicula => {
                    const card = document.createElement("div")
                    card.innerHTML =    `<h2>${pelicula.nombre}</h2>
                                        <p>Precio: $${pelicula.precio}</p>
                                        <button class="agregarPeliculas" id= "${pelicula.id}">Comprar</button>`
                    peliculasContainer.appendChild(card)
                })
            }
            
            function addToCardButton(){
                const addButtons = document.querySelectorAll(".agregarPeliculas")
                addButtons.forEach(button => {
                    button.onclick = (e) => {
                        const peliculasID = e.currentTarget.id 
                        const selectPelicula = peliculas.find(p => p.id == peliculasID)
                        cartPeliculas.push(selectPelicula)
                        console.log(cartPeliculas)

                        localStorage.setItem("cartPeliculas", JSON.stringify(cartPeliculas))
                    } 
                })
            }
            renderPeliculas(peliculas)
            addToCardButton()

// let calcular = document.getElementById("calcular")
// let restar = document.getElementById("boton-restar")
// let sumar = document.getElementById("boton")
// let counter = document.getElementById("counter")
// let total = document.getElementById("total")
// let contador = 2
// // let costoEntrada = 15000;
    
//     sumar.onclick = () => {
//         contador++
//         counter.innerHTML = contador
//     }
//     restar.onclick = () => {
//         if (contador > 0) contador--
//         counter.innerHTML = contador
//     }

//     calcular.onclick = () => {
//         let operacion = costoEntrada * contador
//         total.innerHTML = "Total: $" + operacion.toLocaleString()
//     }

