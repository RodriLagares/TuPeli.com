        let cartPeliculas = JSON.parse(localStorage.getItem("cartPeliculas")) || [];
        let peliculasContainer = document.getElementById("peliculas-container");

const URL = "./db/data.json";


function obtenerPeliculas() {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
    renderPeliculas(data);
    activarBotones(data);
    })
    .catch((err) => console.error("Error al cargar las películas:", err))
    .finally(() => console.log("Carga de películas finalizada"));
}

obtenerPeliculas();


function renderPeliculas(listaPeliculas) {
    peliculasContainer.innerHTML = ""; // Limpia el contenedor antes de renderizar

    listaPeliculas.forEach((pelicula) => {
    const card = document.createElement("div");
    card.classList.add("pelicula-card");
    card.innerHTML = `<h3>${pelicula.nombre}</h3>
                        <p>Precio: $${pelicula.precio}</p>
                        <button class="agregarPeliculas" id="${pelicula.id}">Agregar al carrito</button>`;
    peliculasContainer.appendChild(card);
    });
}


function activarBotones(peliculas) {
    const botonesAgregar = document.querySelectorAll(".agregarPeliculas");

    botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
    const peliculaID = e.currentTarget.id;
    const peliculaSeleccionada = peliculas.find((p) => p.id == peliculaID);

    if (peliculaSeleccionada) {
        cartPeliculas.push(peliculaSeleccionada);
        localStorage.setItem("cartPeliculas", JSON.stringify(cartPeliculas));
        }
    });
    });
}




