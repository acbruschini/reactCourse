import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:category" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
