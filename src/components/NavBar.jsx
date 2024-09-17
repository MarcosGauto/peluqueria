import { Link } from "react-router-dom";

function NavBar({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmty, cartTotal }) {

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">

                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <ul className="d-flex gap-4 list-unstyled mb-5 m-8 w-100 mt-3 p-2 text-lg">
                            <li>
                            <Link to="/inicio"> Inicio</Link>
                            </li>
                            <li>
                            <Link to="/QuienesSomos"> Quienes Somos</Link>
                            </li>
                            <li>
                            <Link to="/productos"> Productos</Link>
                            </li>
                            <li>
                            <Link to="/contacto"> Contacto</Link>
                            </li>
                        </ul>
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />


                            <div id="carrito" className="bg-white p-3">
                                {isEmty ? (   //antes tenia parentesis isEmty porque era una funcion pero ya no lo es
                                    <p className="text-center">El carrito esta vacio</p>
                                ) : (
                                    <>
                                        

                                        <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal} </span></p>
                                    </>
                                )}
                                <button
                                    className="btn btn-dark w-100 mt-3 p-2"
                                    onClick={clearCart}
                                >Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )

}

export default NavBar;