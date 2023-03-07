import "./pedido.css";
import React from "react";
import { useState, useContext } from 'react';
import logo from '../assets/logo.svg'
import Produto from "./ArrayPedidos";
import { CartContext } from "./CarrinhoContext/cartContex";
import { v4 as uuidv4 } from 'uuid';

const Pedido = () => {
  const [cart, setCart] = useContext(CartContext)


  //PEGANDO RECHEIO ATRIBUINDO NO UseStore do EASY-PEASY
  const [isChecked, setIsChecked] = useState([]);


  //Atribuindo a quentidade
  const [Contador, setContador] = useState(1);
  //----------------------------------------------

  //Verifica se as opçoes de recheio esta visivel ou nao e atribui o Id para fazer a condicional
  const [display, setDisplay] = useState(false);
  const [hamId, setHambId] = useState();
  //--------------------------------------------------
  const sum = () => {
    setContador(Contador + 1);
  }
  const sub = () => {
    setContador(Contador - 1);

    if (Contador < 1) {
      setContador(0);
    }
  }





  const showhiden = (id) => {
    setContador(0);
    setHambId(id);
    setIsChecked([])
    setDisplay(current => !current);
  }




  const handleSave = (dataName, dataImage, recheio, preço, idHamburguer, quantidade) => {

    const combinacao = dataName + ' com ' + recheio;
    const hamburguer = {Id: idHamburguer, itemId : uuidv4(), Nome:dataName, Imagen: dataImage, Recheios: recheio,combinacao, price: preço, quantity: quantidade };
    const itemIndex = cart.findIndex(item => item.combinacao === combinacao);

    if (itemIndex > -1) {
      const newItem = [...cart];
      newItem[itemIndex].quantity += 1;
      setCart(newItem);
    } else {
      setCart([...cart, hamburguer]);
    }

  };





  return (
    <div className="container" id="opt1" >
      <div className="icon"><img src={logo}></img></div>



      <div className="menu">
        <h1>Menu</h1>
        {Produto.map((hamburguer, index) =>


          <div key={index} >
            <React.Fragment key={hamburguer.id}>

              <div className="Burguers">
                <div className="icon"><img src={hamburguer.Imagen}></img></div>
                <div className="nameHamb"><h2>{hamburguer.Nome}</h2></div>
                <div key={index}> <button onClick={() => showhiden(hamburguer.id)} className="btn">Opções:</button></div>
              </div>

              <div>
                {display && hamburguer.id === hamId &&
                  <div className="overlay">
                    <div className="inp">

                      {hamburguer.Recheio.map((recheio, index) =>
                        <div className='labels' key={index}>
                          <label>
                            <input type="checkbox" id="checkbox" name={recheio} key={index} onChange={(event) => {
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
                        <div><input type='text' value={Contador} /></div>
                        <div><button style={{ backgroundColor: 'red' }} onClick={sub}  >-</button></div>
                      </div>

                      <div className='btn2' >
                        <div><button className='btn' onClick={() => handleSave(hamburguer.Nome, hamburguer.Imagen, isChecked, hamburguer.Preço, hamburguer.id, hamburguer.quantity)} >Guardar</button></div>
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

  const [cart] = useContext(CartContext);

  const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);


  return (
    <div className="container" id="opt2">
      <div className="menu2">
        <h1>Relatório</h1>
        <h2>price: {totalPrice}</h2>
        {cart.map((item, index) =>
          <div className="Burguers" key={index}>
            <div className="icon"><img src={item.Imagen}></img></div>
            <div className="nameHamb"><h2>{item.Nome}</h2></div>
            {item.Recheios.map(iten =>
              <div>
                <p>{iten + ' '}</p>
              </div>
            )}
            <p>{item.quantity}</p>
          </div>

        )}



      </div>
    </div>
  );
};





export { Pedido, Carrinho };
