import { useState } from "react"
import ListaProductos from "./ListaProductos"
import { db } from "../data/db"


function Productos () {
    const[data, setData]=useState(db)

  
    return(
        <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div>
        <div class="row mt-5">
          {data.map((guitar) =>{
              return(
                <ListaProductos
                 guitar={guitar}
                />
              )
          })}
         
            
        </div>
        </div>

        <div className="row mt-5">

        </div>

    </main>
    )
}

export default Productos