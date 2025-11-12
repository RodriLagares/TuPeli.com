        let cartPeliculas = JSON.parse(localStorage.getItem("cartPeliculas")) || [];
        let peliculasContainer = document.getElementById("peliculas-container");

const URL = "../db/data.json";

        async function obtenerPeliculas(){
            try{
                const response = await fetch(URL)
                if (!response.ok){
                    throw new Error (`Error HTTP ${response.status}`)
                }
                const data = await response.json()
                renderPeliculas(data)
                activarBotones(data)
            } catch(error){
                console.log("Error al cargar las peliculas", error)
                peliculasContainer.innerHTML = "<h2>No se puedo cargar la pelicula. Intentalo mas tarde</h2>"
            } finally{
                mostrarFeedback(`Carga finalizada`)
            }
            
        }

function renderPeliculas(listaPeliculas) {
    listaPeliculas.forEach((pelicula) => {
    const card = document.createElement("div");
    card.classList.add("pelicula-card");
    card.innerHTML = `<h3>${pelicula.nombre}</h3>
                        <p>Precio: $${pelicula.precio}</p>
                        <button class="agregarPeliculas" data-id="${pelicula.id}">Agregar al carrito</button>`;
    peliculasContainer.appendChild(card);
    });
}


function activarBotones(peliculas) {
    const botonesAgregar = document.querySelectorAll(".agregarPeliculas");

    botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
    const peliculaID = e.currentTarget.getAttribute("data-id");
    agregarCarrito(peliculas,peliculaID)

    });
    });
}

function agregarCarrito(peliculas,ID){
    const peliculaSeleccionada = peliculas.find((p) => p.id == ID)
    if (peliculaSeleccionada){
        cartPeliculas.push(peliculaSeleccionada)
        localStorage.setItem("cartPeliculas", JSON.stringify(cartPeliculas))
        if (typeof mostrarFeedback === `function` ){
            mostrarFeedback(`${peliculaSeleccionada.nombre} Agregado correctamente`)
        } 
}
    }

        obtenerPeliculas()




