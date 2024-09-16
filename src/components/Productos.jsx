import Guitar from "./Guitar"

function Productos () {
    return(
        <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (  //siempre que iteres con un .map siempre hay que pasarle un identificador unico siempre va a tener el nombre de key
            <Guitar
              key={guitar.id}
              guitar={guitar}            //parte de la izq es el nombre del prop, es decir forma por la que vamos acceder y derecha es el valor que le vamos a pasar
              addToCart={addToCart}
            />

          ))}
          
          

      

        </div>

    </main>
    )
}

export default Productos