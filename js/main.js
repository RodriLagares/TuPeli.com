        let cartPeliculas = JSON.parse(localStorage.getItem("cartPeliculas")) || [];
        let peliculasContainer = document.getElementById("peliculas-container");

const URL = "./db/data.json";

        async function obtenerPeliculas(){
            try{
                const response = await fetch(URL);

                if (!response.ok){
                    throw new Error (`Error HTTP ${response.status}`);
                }
                const data = await response.json();
                renderPeliculas(data);
                activarBotones(data);
            } catch(error){
                peliculasContainer.innerHTML = "<h2>No se pudieron cargar las peliculas</h2>";
                console.log(error);
            } 
        }
        obtenerPeliculas()

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
    const botones = document.querySelectorAll(".agregarPeliculas");
    botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
    const ID = Number(e.currentTarget.getAttribute("data-id"));
    agregarCarrito(peliculas,ID);

    });
    });
}


function agregarCarrito(peliculas,id){
    const existe = cartPeliculas.find((p) => p.id === id);
    if (existe){
    existe.cantidad++;
    } else {
        const peli = peliculas.find((p) => p.id === id);
        cartPeliculas.push({ 
        id: peli.id,
        nombre: peli.nombre,
        precio: peli.precio,
        cantidad: 1
        });
    }
    localStorage.setItem("cartPeliculas", JSON.stringify(cartPeliculas));
    Toastify({
        text: "Producto añadido",
        duration: 1500,
        gravity: "top",
        position: "right",
    }).showToast();

}





