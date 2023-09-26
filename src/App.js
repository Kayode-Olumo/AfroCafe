import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Features/Meals/Meals";
import Cart from "./components/Features/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true)
  }

  const handleModalClose = () => {
    setIsOpen(false)
  }

  return (
    <CartProvider>
      {isOpen && <Cart closeModal={handleModalClose}/>}
      <Header openModal={handleModalOpen}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
