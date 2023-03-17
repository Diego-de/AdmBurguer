import './App.css';
import { BrowserRouter} from "react-router-dom";
import {Pedido, Carrinho} from './Pages/Pedidos';
import Produto from './Pages/ArrayPedidos';
import { CartProvider } from './Pages/CarrinhoContext/cartContex';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter >
      <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'#DEF0E2'}}>
          <div style={{width:'60%'}}><Pedido produto={Produto} /></div>
          <div style={{width:'39%'}}><Carrinho/></div>
      </div>   
      </BrowserRouter>
    </CartProvider> 
    </>
  );
}

export default App;
