import "./pedido.css";
import React from "react";
import { useState, useContext } from 'react';
import logo from '../assets/logo.svg'
import Produto from "./ArrayPedidos";
import { CartContext } from "./CarrinhoContext/cartContex";
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';
import { CgFileDocument } from "react-icons/cg";


const Pedido = () => {

  const [cart, setCart] = useContext(CartContext)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isChecked, setIsChecked] = useState([]);
  const [lastSelectedValue, setLastSelectedValue] = useState([]);
  const [adicional, setAdicional] = useState([]);


  const [openMenus, setOpenMenus] = useState({});
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


  const sumADC = (id, item, hamb) => {

    // Verifica se o adicional já está no estado
    const existingItem = adicional.find(item => item.Nome === hamb.Adicionais[id].Nome);
    if (existingItem) {
      const updatedItem = { ...existingItem, Quantidade: existingItem.Quantidade + 1 };
      hamb.Adicionais[id] = { ...hamb.Adicionais[id], quantidade: updatedItem.Quantidade };
      const updatedAdicional = adicional.map(item => item.Nome === updatedItem.Nome ? updatedItem : item);
      setAdicional(updatedAdicional);
    } else {
      const newItem = {
        Quantidade: 1,
        Nome: item.Nome,
        Preço: item.Preço
      }
      hamb.Adicionais[id] = { ...hamb.Adicionais[id], quantidade: 1 };
      setAdicional([...adicional, newItem]);
    }
  }



  const subADC = (id, hamb) => {

    const existingItem = adicional.find(item => item.Nome === hamb.Adicionais[id].Nome);

    if (existingItem && existingItem.Quantidade > 0) {
      const updatedItem = { ...existingItem, Quantidade: existingItem.Quantidade - 1 };
      hamb.Adicionais[id] = { ...hamb.Adicionais[id], quantidade: updatedItem.Quantidade };
      const updatedAdicional = adicional.map(item => item.Nome === updatedItem.Nome ? updatedItem : item);
      setAdicional(updatedAdicional);

      if (updatedItem.Quantidade === 0) {
        // Remove o adicional do estado
        const filteredAdicional = adicional.filter(item => item.Nome !== updatedItem.Nome);
        setAdicional(filteredAdicional);
      }
    }
  }

  const handleToggleMenu = (hambId, hamburguer) => {
    setIsChecked([])


    let lastSelectedValue = null;
    const updatedIsChecked = [];
    for (let i = 0; i < hamburguer.Recheio.length; i++) {
      let recheio = hamburguer.Recheio[i];
      updatedIsChecked.push(recheio);
      if (lastSelectedValue === null || recheio === lastSelectedValue) {
        lastSelectedValue = recheio;
      }
    }
    setIsChecked(updatedIsChecked);
    setLastSelectedValue(lastSelectedValue);


    setOpenMenus({
      ...openMenus,
      [hambId]: !openMenus[hambId]
    });

    setContador(0);
    setAdicional([]);
  }


  const handleSave = (dataName, dataImage, dataImage2, recheio, preço, idHamburguer, quantidade, ADC) => {

    let totalPrice = preço;
    ADC.forEach((item) => {
      totalPrice += (item.Preço * item.Quantidade);
    });


    const combinacao = dataName + ' com ' + recheio;
    const hamburguer = { Id: idHamburguer, itemId: uuidv4(), Nome: dataName, Imagen: dataImage, Imagen2: dataImage2, Recheios: recheio, combinacao, price: totalPrice, quantity: quantidade, Adicionais: ADC };
    const itemIndex = cart.findIndex(item => item.combinacao === combinacao && JSON.stringify(item.Adicionais) === JSON.stringify(ADC));



    if (itemIndex > -1) {
      const newItem = [...cart];
      newItem[itemIndex].quantity += quantidade;
      setCart(newItem);
    } else {
      setCart([...cart, hamburguer]);
    }


  };



  const VerCart = () => {
    document.getElementById('device').style.display = "block";
  }


  return (
    <div className="container" id="opt1" >
      <div className="icon"><img src={logo}></img></div>
      <div className="title">
        <h1>Menu</h1>
        <button onClick={VerCart} className="btnClose" style={{ backgroundColor: '#498D58', color: '#B6EAC2' }}><CgFileDocument size={20} />{cart.length}</button>
      </div>

      <div className="buttonOfFind">
        <button onClick={() => setSelectedCategory("Normal")}>Todos</button>
        <button onClick={() => setSelectedCategory("Combo")}>Combos</button>
        <button onClick={() => setSelectedCategory("Artesanal")}>Artesanal</button>
      </div>
      <div className="menu">

        {Produto
          .filter((hamburguer) => selectedCategory ? hamburguer.category === selectedCategory : true)
          .map((hamburguer, index) =>
            <div key={index} >
              <React.Fragment key={hamburguer.id}>

                <div className="Burguers">
                  <div className="icon">
                    <img src={hamburguer.Imagen}></img>
                    <img src={hamburguer.Imagen2}></img>
                  </div>
                  <div className="nameHamb"><h2>{hamburguer.Nome}</h2></div>
                  <div key={index}> <button onClick={() => handleToggleMenu(hamburguer.id, hamburguer)} className="btn">Opções:</button></div>
                </div>

                <div>
                  {openMenus[hamburguer.id] &&
                    <div className="overlay">
                      <div className="inp">

                        <div className="options">
                          <div className="recheios">
                            <h2>Recheios</h2>
                            {hamburguer.Recheio.map((recheio, index) =>
                              <div className='labels' key={index}>
                                <label>
                                  <input type="checkbox"
                                    id="checkbox"
                                    checked={isChecked.includes(recheio)}
                                    name={recheio}
                                    key={index}
                                    onChange={(event) => {
                                      if (event.target.checked) {
                                        setIsChecked([...isChecked, recheio]);
                                        setLastSelectedValue(recheio);
                                      } else {
                                        setIsChecked(
                                          isChecked.filter((value) => value !== recheio)
                                        );
                                        setLastSelectedValue(
                                          isChecked.filter((value) => value !== recheio)[0]
                                        );
                                      }
                                    }} />
                                  {recheio}</label>
                              </div>
                            )}
                          </div>
                          <div className="adicionais">
                            <h2>Adicionais</h2>
                            {hamburguer.Adicionais.map((item, index) =>
                              <div className='labels' key={index}>
                                <div className='contRech'>
                                  <div><button style={{ backgroundColor: '#51E938' }} onClick={() => sumADC(item.id, item, hamburguer)} >+</button></div>

                                  <div><input type='text' id={`quantity-${index}`} value={item.quantidade || 0} /></div>


                                  <div><button style={{ backgroundColor: 'red' }} onClick={() => subADC(item.id, hamburguer)}>-</button></div>
                                  <label>{item.Nome} = {item.Preço} R$</label>
                                </div>
                              </div>
                            )}

                          </div>

                        </div>
                        <div className='cont'>
                          <div><button style={{ backgroundColor: '#51E938' }} onClick={sum} >+</button></div>
                          <div><input type='text' id="quantity" value={Contador} /></div>
                          <div><button style={{ backgroundColor: 'red' }} onClick={sub}  >-</button></div>
                        </div>
                        <div className='btn2' >
                          <div><button className='btn' onClick={() => handleSave(hamburguer.Nome, hamburguer.Imagen, hamburguer.Imagen2, isChecked, hamburguer.Preço, hamburguer.id, parseInt(document.getElementById('quantity').value, 10) || 1, adicional, hamburguer)} >Guardar</button></div>
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


  let workbook = null;

  const downloadXLSX = (filename) => {

    const selectedData = cart.map(item => ({
      Nome: item.Nome,
      Recheios: item.Recheios.join(", "),
      Quantidade: item.quantity,
      Adicionais: item.Adicionais.map(item => {
        return item.Nome
      }).join(", "),
      Preço: item.quantity * item.price,
    }));

    selectedData.push({
      "Preço total": totalPrice,
    });

    const worksheet = XLSX.utils.json_to_sheet(selectedData);

    if (workbook) {
      
      XLSX.utils.book_append_sheet(workbook, worksheet, "carrinho");
      XLSX.writeFile(workbook, filename);
    } else {
      
      workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "carrinho");
      XLSX.writeFile(workbook, filename);
    }
  };

  const removeAll = () => {
    if (window.confirm("Tem certeza?")) {
      setCart([]);
    }
  }


  return (
    <div className="container" id="opt2">
      <div className="menu2">
        <div className="title">
          <h1>Relatório</h1>
        </div>
        <div className="BurguerCart" >
          {cart.map((item, index) =>
            <div className="cartIcons" key={index}>
              <div style={{ display: 'flex', backgroundColor: '#0F0F0F', alignItems: 'center' }}>
                <div className="icon">
                  <img src={item.Imagen}></img>
                  <img src={item.Imagen2}></img>
                </div>
                <div className="nameHamb"><h2>{item.Nome}</h2></div>
                <div style={{ textAlign: 'justify', marginRight: '5%' }}>
                  <p>Recheios: {item.Recheios.length}</p>
                  <p>Adicionais: {item.Adicionais.length}</p>
                </div>
                <div><button className="btn" onClick={() => handleToggleMenu(item.itemId)}>Ver</button></div>
                <button className="btndel" onClick={() => handleDeleteItem(item.itemId)}>-</button>
              </div>

              {
                openMenus[item.itemId] &&
                <ul className="RechCart">
                  <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "50%" }}>
                      <p style={{ color: 'yellow' }}>Recheios</p>
                      {item.Recheios.map(item =>
                        <li>{item}</li>
                      )}
                    </div>
                    <div style={{ width: "50%" }}>
                      <p style={{ color: 'yellow' }}>Adicionais</p>
                      {item.Adicionais.map(item =>
                        <li>
                          {item.Nome} = {item.Quantidade}
                        </li>
                      )}
                    </div>
                  </div>
                </ul>
              }
              < ul className="RechCartQTD" >
                <li >Quantidade: {item.quantity}</li>
              </ul>
            </div>
          )}
        </div>
        <div style={{ textAlign: 'end', marginRight: "15px" }}>
          <h2>Total: {totalPrice}</h2>
        </div>
        {
          cart.length > 0 &&
          <div className="btnClear">
            <button className="btn" onClick={removeAll}>Limpar itens</button>
            <button className="btn" onClick={() => downloadXLSX("Relatório.xlsx")}>Baixar</button>
          </div>
        }

      </div >
    </div >
  );
};





export { Pedido, Carrinho };
