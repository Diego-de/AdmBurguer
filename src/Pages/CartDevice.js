import "./pedido.css";
import React from "react";
import { useState, useContext } from 'react';
import { CartContext } from "./CarrinhoContext/cartContex";
import * as XLSX from 'xlsx';



const CarrinhoDevice = () => {
    
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
      Adicionais: item.Adicionais.map(item =>{
        return item.Nome
      }).join(", "),
      Preço: item.quantity * item.price,
    }));

    selectedData.push({
      "Preço total": totalPrice,
    });

    const worksheet = XLSX.utils.json_to_sheet(selectedData);

    if (workbook) {
      // Workbook já foi criado, então adiciona a planilha ao workbook existente
      XLSX.utils.book_append_sheet(workbook, worksheet, "carrinho");
      XLSX.writeFile(workbook, filename);
    } else {
      // Workbook não foi criado, então cria um novo workbook e adiciona a planilha
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


  const close = () =>{
    document.getElementById('device').style.display = "none";
  }


  return (
    <div className="container" id="opt2">
      <div className="menuDevice">
      <div className="titleDevice">
        <h1>Relatório</h1>
        <button onClick={close} className="btnClose" >X</button>
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
                    <div style={{ width: "50%"}}>
                      <p style={{color:'yellow'}}>Recheios</p>
                      {item.Recheios.map(item =>
                        <li>{item}</li>
                      )}
                    </div>
                    <div style={{ width: "50%" }}>
                      <p style={{color:'yellow'}}>Adicionais</p>
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
          <div className="btnClear" style={{top:0}}>
            <button className="btn" onClick={removeAll}>Limpar itens</button>
            <button className="btn" onClick={() => downloadXLSX("Relatório.xlsx")}>Baixar</button>
          </div>
        }

      </div >
    </div >
  );
};





export default CarrinhoDevice ;


