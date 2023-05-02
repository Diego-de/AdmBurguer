import './App.css';
import { BrowserRouter} from "react-router-dom";
import {Pedido, Carrinho} from './Pages/Pedidos';
import CarrinhoDevice from './Pages/CartDevice';
import Produto from './Pages/ArrayPedidos';
import { CartProvider } from './Pages/CarrinhoContext/cartContex';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter >
      <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'#DEF0E2'}}>
          <div className='MenuList'><Pedido produto={Produto} /></div>
          <div className='Pc'><Carrinho/></div>
          <div id='device'><CarrinhoDevice/></div>
      </div>   
      </BrowserRouter>
    </CartProvider> 
    </>
  );
}

export default App;
