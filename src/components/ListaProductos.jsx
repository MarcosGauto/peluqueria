
// en img src se pone llaves con un template para indicarle de donde viene la imagen
function ListaProductos({guitar}) {

    const { id, name, image, description, price} = guitar



    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={'/img/${image}.jpg'} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p></p>
                <p className="fw-black text-primary fs-3">$  </p>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ListaProductos