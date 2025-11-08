let cartPeliculas = JSON.parse(localStorage.getItem("cartPeliculas"))
let carritoContainer = document.getElementById("carrito-container")
let totalContainer = document.getElementById("total")
let finalizarCompra = document.getElementById("comprar")



            function renderCarrito(){
            if (cartPeliculas.length ===0){
                carritoContainer.innerHTML = "<h2>No hay ninguna pelicula agregada</h2>"
                return
            }
            cartPeliculas.forEach ((peli, index)=>{
                const card = document.createElement ("div")
                card.classList.add("pelicula-card")
                card.innerHTML = ` <h2>${peli.nombre}</h2>
                                    <h2>Precio: $${peli.precio}</h2>
                                    <button class="eliminar" data-index="${index}">Eliminar</button>`
                    carritoContainer.appendChild()
                
            })
                
            }
            calcularTotal()
            activarBotones()

            function calcularTotal(){
                const total = cartPeliculas.reduce((acc,peli)=> acc + peli.precio, 0)
                totalContainer.textContent = `Total= $${total}` 
            }
            function activarBotones (){
                const botonesEliminar = document.querySelectorAll(".eliminar")
                botonesEliminar.forEach((boton) => {
                boton.addEventListener("click", (e)=>{
                    const index = e.target.dataset.index
                    cartPeliculas.splice(index,1)
                    localStorage.setItem("cartPeliculas", JSON.stringify(cartPeliculas))
                    renderCarrito()
                })
                })
            }

            finalizarCompra.addEventListener("click", () =>{
                if (cartPeliculas.length === 0)
            Swal.fire({
            title: "El carrito está vacío",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
        return;
        
    }).then(() => {
        Swal.fire({
        title: "Pago realizado",
        text: "¡Gracias por tu compra!",
        icon: "success",
        confirmButtonText: "Aceptar"
            })
        cartPeliculas = [];
        localStorage.setItem("cartPeliculas", JSON.stringify(cartPeliculas));
        renderCarrito();
    });


renderCarrito();

            
            

        



    
