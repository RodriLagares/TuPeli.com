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
        { 
            id: 5,
            nombre: "Vikingos",
            precio: 20000
        },
        { 
            id: 6,
            nombre: "Peaky Blinders",
            precio: 25000
        },
        { 
            id: 7,
            nombre: "Better Call Saul",
            precio: 19000
        },
        { 
            id: 8,
            nombre: "Dr House",
            precio: 17599
        },
        { 
            id: 9,
            nombre: "La Huésped",
            precio: 2287
        },
        { 
            id: 10,
            nombre: "Narcos",
            precio: 23500
        },
        { 
            id: 11,
            nombre: "Rivaldale",
            precio: 24000
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



