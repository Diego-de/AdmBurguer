import "./pedido.css";
import React from "react";
import { useState, useContext } from 'react';
import logo from '../assets/logo.svg'
import Produto from "./ArrayPedidos";
import { CartContext } from "./CarrinhoContext/cartContex";
import { useStoreState, useStoreActions } from 'easy-peasy';

//<LinkScroll className="btn1" to="opt2" spy={true} smooth={true} offset={50} duration={500} >Test</LinkScroll>
//   Produto.map((projeto, index) => <Pedido key={index} produto={projeto} /> )


const Pedido = () => {

    const [cart, setCart] = useContext(CartContext)
    const RecheioStore = useStoreState(state => state.Recheio)
    const SetRecheioStore = useStoreActions(state => state.setRecheio)



    const [Contador, setContador] = useState(1);
    const [display, setDisplay] = useState(false);
    const [hamId, setHambId] = useState();

    const [checkbox, setCheckbox] = useState(RecheioStore);


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
        setCheckbox('');
        setHambId(id);
        setDisplay(current => !current);

    }

    const salvarCheckbox = (valor) => {
        if (checkbox.includes(valor)) {
            setCheckbox(checkbox.filter((valores) => valores !== checkbox))
        } else {
            setCheckbox([...checkbox, valor])
        }

    }


    const handleSave = (dataName, dataImage, recheio, preço) => {
        const hamburguer = { Nome: dataName, Imagen: dataImage, Recheios: [recheio], price: preço }
        setCart([...cart, hamburguer]);
    }


    return (
        <div className="container" id="opt1" >
            <div className="icon"><img src={logo}></img></div>



            <div className="menu">
                <h1>Menu</h1>
                {Produto.map((hamburguer, index) =>

                    <div>
                        <React.Fragment key={hamburguer.id}>

                            <div className="Burguers">
                                <div className="icon"><img src={hamburguer.Imagen}></img></div>
                                <div className="nameHamb"><h2>{hamburguer.Nome}</h2></div>
                                <div key={index}> <button onClick={() => showhiden(hamburguer.id)} Class="btn">Opções:</button></div>
                            </div>

                            <div>
                                {display && hamburguer.id === hamId &&
                                    <div className="overlay">
                                        <div className="inp">

                                            {hamburguer.Recheio.map((recheio) =>
                                                <div class='labels'>
                                                    <label><input type="checkbox" name="Recheio" value={recheio} onClick={() => salvarCheckbox(recheio)} />{recheio}</label>
                                                </div>
                                            )}

                                            <div key={index} className='cont'>
                                                <div><button style={{ backgroundColor: '#51E938' }} onClick={sum} >+</button></div>
                                                <div><input type='text' value={Contador} /></div>
                                                <div><button style={{ backgroundColor: 'red' }} onClick={sub}  >-</button></div>
                                            </div>

                                            <div className='btn2' >
                                                <div><button className='btn' onClick={() => handleSave(hamburguer.Nome, hamburguer.Imagen, checkbox, hamburguer.Preço)} >Guardar</button></div>
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

    const [cart, setCart] = useContext(CartContext)

    const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

    console.log(cart)

    return (
        <div className="container" id="opt2">
            <div className="menu2">
                <h1>Relatório</h1>
                <h2>price: {totalPrice}</h2>
                {cart.map(item =>
                    <div className="Burguers">
                        <div className="icon"><img src={item.Imagen}></img></div>
                        <div className="nameHamb"><h2>{item.Nome}</h2></div>
                        {item.Recheios.map( iten =>
                        <div>
                            <p>{iten+' '}</p> 
                        </div>   
                        )}
                    </div>
                   
                )}
                


            </div>
        </div>
    );
};





export { Pedido, Carrinho };
