
import NavBar from "./components/NavBar";
import Guitar from "./components/Guitar";
import useCart from "./hooks/useCart";
import Inicio from "./components/Inicio";



function App() {

  const { data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmty, cartTotal } = useCart() // se coloca lo que esta en el return de useCart.js

  return (
    <>

      <NavBar
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmty={isEmty}
        cartTotal={cartTotal}

      />

      <div>
        
      </div>


      
      <div>
          <Inicio/>
      </div>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
