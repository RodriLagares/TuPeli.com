let cartPeliculas = JSON.parse(localStorage.getItem("cartPeliculas")) || [];
let carritoContainer = document.getElementById("carrito-container");
let totalContainer = document.getElementById("total");
let finalizarCompra = document.getElementById("comprar");



            function renderCarrito(){
                carritoContainer.innerHTML= "";

            if (cartPeliculas.length === 0){
                carritoContainer.innerHTML = "<h2>No hay ninguna pelicula agregada</h2>"  
                totalContainer.textContent = "";
                return;
            }
            cartPeliculas.forEach ((peli)=>{
                const card = document.createElement ("div");
                card.classList.add("pelicula-card");
                card.innerHTML = ` <h2>${peli.nombre}</h2>
                                    <h2>Precio: $${peli.precio}</h2>
                                    <p>Cantidad: ${peli.cantidad}</p>
                                    <button class="eliminar" id= "${peli.id}">Eliminar</button>`
                    carritoContainer.appendChild(card)
            });
                
            calcularTotal()
            ActivarBotonEliminar()
            }
            renderCarrito()

            function calcularTotal(){
                const total = cartPeliculas.reduce((acc, p) => acc + p.precio * p.cantidad, 0)
                totalContainer.textContent = `Total: $${total}`
            }
            function ActivarBotonEliminar(){
                const botones = document.querySelectorAll(".eliminar");
                botones.forEach((boton) =>{ 
                    boton.addEventListener("click", (e) =>{
                        const id = Number(e.currentTarget.id)
                        const peli = cartPeliculas.find((p) => p.id === id)
                        peli.cantidad--;
                        if (peli.cantidad <= 0){
                            cartPeliculas = cartPeliculas.filter((p) => p.id !== id)
                        }
                        localStorage.setItem("cartPeliculas", JSON.stringify(cartPeliculas));
                        renderCarrito();
                    })
                })
            }
            finalizarCompra.addEventListener("click", () => {
                if(cartPeliculas.length === 0){
            Swal.fire({
            title: "El carrito está vacío",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
            return
    }   
    Swal.fire({
        title: "¿Confirmar compra?",
        text: `${totalContainer.textContent}`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Pagar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡Compra realizada!",
                text: "Gracias por su compra.",
                icon: "success"
            });

            cartPeliculas = [];
            localStorage.setItem("cartPeliculas", JSON.stringify(cartPeliculas));
            renderCarrito();
        }
    });
});

