import React, { createContext, useState ,useEffect} from 'react'

export const CartContext = createContext()

export function CartProvider(props) {
    const [cart, setCart] = useState(() => {
      // Verifica se já existe carrinho salvo no localStorage
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        // Se já existe carrinho salvo, retorna o carrinho como um array de objetos
        return JSON.parse(savedCart);
      } else {
        // Se não existe carrinho salvo, retorna um array vazio
        return [];
      }
    });
  
    // Salva as informações do carrinho no localStorage sempre que o carrinho for modificado
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    return (
      <CartContext.Provider value={[cart, setCart]}>
        {props.children}
      </CartContext.Provider>
    );
  }

