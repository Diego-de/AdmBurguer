import "./pedido.css";
import React from "react";
import { useState, useContext } from 'react';
import logo from '../assets/logo.svg'
import Produto from "./ArrayPedidos";
import { CartContext } from "./CarrinhoContext/cartContex";
import { v4 as uuidv4 } from 'uuid';
import { textAlign } from "@mui/system";

const Pedido = () => {
  const [cart, setCart] = useContext(CartContext)


  //PEGANDO RECHEIO ATRIBUINDO NO UseStore do EASY-PEASY
  const [isChecked, setIsChecked] = useState([]);

  //Atribuindo a quentidade

  //----------------------------------------------

  //Verifica se as opçoes de recheio esta visivel ou nao e atribui o Id para fazer a condicional
  const [openMenus, setOpenMenus] = useState({});


  //--------------------------------------------------
  const [Contador, setContador] = useState(1);

  const sum = () => {
    setContador(Contador + 1);
  }
  const sub = () => {
    setContador(Contador - 1);

    if (Contador < 1) {
      setContador(0);
    }
  }

  const handleToggleMenu = (hambId) => {
    setContador(0);
    setIsChecked([])
    setOpenMenus(prevOpenMenus => {
      const isOpen = prevOpenMenus[hambId];
      return { ...prevOpenMenus, [hambId]: !isOpen };
    });
  }






  const handleSave = (dataName, dataImage, recheio, preço, idHamburguer, quantidade) => {

    const combinacao = dataName + ' com ' + recheio;
    const hamburguer = { Id: idHamburguer, itemId: uuidv4(), Nome: dataName, Imagen: dataImage, Recheios: recheio, combinacao, price: preço, quantity: quantidade };
    const itemIndex = cart.findIndex(item => item.combinacao === combinacao);

    if (itemIndex > -1) {
      const newItem = [...cart];
      newItem[itemIndex].quantity += quantidade;
      setCart(newItem);
    } else {
      setCart([...cart, hamburguer]);
    }


  };





  return (
    <div className="container" id="opt1" >
      <div className="icon"><img src={logo}></img></div>


      <div className="title">
        <h1>Menu</h1>
      </div>
      <div className="buttonOfFind">
        <button>Normal</button>
        <button>Combos</button>
        <button>Regrigerante</button>
        <button>Batata fritas</button>
      </div>
      <div className="menu">
        {Produto.map((hamburguer, index) =>
          <div key={index} >
            <React.Fragment key={hamburguer.id}>

              <div className="Burguers">
                <div className="icon"><img src={hamburguer.Imagen}></img></div>
                <div className="nameHamb"><h2>{hamburguer.Nome}</h2></div> 
                <div key={index}> <button onClick={() => handleToggleMenu(hamburguer.id)} className="btn">Opções:</button></div>
              </div>

              <div>
                {openMenus[hamburguer.id] &&
                  <div className="overlay">
                    <div className="inp">

                      {hamburguer.Recheio.map((recheio, index) =>
                        <div className='labels' key={index}>
                          <label>
                            <input type="checkbox" id="checkbox" checked={isChecked.includes(recheio)} name={recheio} key={index} onChange={(event) => {
                              if (event.target.checked) {
                                setIsChecked([...isChecked, recheio]);
                              } else {
                                setIsChecked(
                                  isChecked.filter((value) => value !== recheio))
                              }
                            }} />
                            {recheio}</label>
                        </div>
                      )}

                      <div className='cont'>
                        <div><button style={{ backgroundColor: '#51E938' }} onClick={sum} >+</button></div>
                        <div><input type='text' id="quantity" value={Contador} /></div>
                        <div><button style={{ backgroundColor: 'red' }} onClick={sub}  >-</button></div>
                      </div>       
                      <div className='btn2' >
                        <div><button className='btn' onClick={() => handleSave(hamburguer.Nome, hamburguer.Imagen, isChecked, hamburguer.Preço, hamburguer.id, parseInt(document.getElementById('quantity').value, 10) || 1)} >Guardar</button></div>
                      </div>
                    </div>
                  </div>
                }
              </div>

            </React.Fragment>
          </div>

        )}
      </div>

    </div>

  );

};

const Carrinho = () => {

  const [cart, setCart] = useContext(CartContext);
  const [openMenus, setOpenMenus] = useState({});

  const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);

  const handleToggleMenu = (hambId) => {
    setOpenMenus(prevOpenMenus => {
      const isOpen = prevOpenMenus[hambId];
      return { ...prevOpenMenus, [hambId]: !isOpen };
    });
  }

  const handleDeleteItem = (itemId) => {
    const index = cart.findIndex(item => item.itemId === itemId);
    const item = cart[index];


    if (item && item.quantity > 1) {
      const newItem = [...cart];
      newItem[index] = { ...item, quantity: item.quantity - 1 };
      setCart(newItem);
    } else {
      const newCart = cart.filter(item => item.itemId !== itemId);
      setCart(newCart);
    }
  }

  const removeAll = () => {
    setCart([]);
  }



  return (
    <div className="container" id="opt2">
      <div className="menu2">
        <h1>Relatório</h1>
        <div className="BurguerCart" >
        {cart.map((item, index) =>
          <div className="cartIcons" key={index}>
            <div style={{ display: 'flex', backgroundColor: '#0F0F0F',alignItems:'center' }}>
              <div className="icon"><img src={item.Imagen}></img></div>
              <div className="nameHamb"><h2>{item.Nome}</h2></div>
              <div style={{textAlign:'justify', marginRight:'5%'}}><p>Recheios: {item.Recheios.length}</p></div>
              <div><button className="btn" onClick={() => handleToggleMenu(item.itemId)}>Ver</button></div>
              <button className="btndel" onClick={() => handleDeleteItem(item.itemId)}>-</button>
          </div>  
          
          {
            openMenus[item.itemId] &&
              <ul className="RechCart">
                {item.Recheios.map(item =>
                  <li>{item}</li>
                )}
              </ul>
          }
          < ul className = "RechCartQTD" >
            <li >Quantidade: {item.quantity}</li>
          </ul>
          </div>
        )}
    </div>
    <div style={{textAlign:'end', marginRight:"15px"}}>
      <h2>Total: {totalPrice}</h2>
    </div>
    {
      cart.length > 0 &&
      <div className="btnClear">
        <button className="btn" onClick={removeAll}>Limpar itens</button>
      </div>
    }


      </div >
    </div >
  );
};





export { Pedido, Carrinho };
