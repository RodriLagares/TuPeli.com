let cartPeliculas = document.getElementById("peli-section")
let cartStorage = localStorage.getItem("cartPeliculas")
cartStorage = JSON.parse(cartStorage)
function renderBiblioteca (cartPeliculas){
    cartPeliculas.forEach(pelicula => {
        const card = document.createElement("div")
        card.innerHTML =  `<h2>${pelicula.nombre}</h2>
                            <p>Precio: $${pelicula.precio}</p>`
                    cartPeliculas.appendChild(card)
    })
}
renderBiblioteca( cartStorage)
    
    
