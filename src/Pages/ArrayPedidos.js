import xburguer from '../assets/xburguer.svg'
import xbacon from '../assets/xbacon.svg'
import xcalabresa from '../assets/xcalabresa.svg'
import xdog from '../assets/xdog.svg'
import xegg from '../assets/xegg.svg'
import refrigerante from '../assets/refrigerante.svg'

const Produto = [
    {
        id: 0,
        Imagen : xburguer,
        Nome: 'X-Burguer',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho' ,' Tomate', 'Maionese da Casa'],
        quantity:1,
        category: 'Normal',
     
    },
    
    {
        id: 1,
        Imagen : xburguer,
        Nome: 'X-Bacon',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Bacon', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
        
    } ,
    
    {
        id: 2,
        Imagen : xburguer,
        Nome: 'Sanduíche Queijo',
        Preço: 7.00,
        Recheio: ['2 Fatias de Pão de caixa', 'Queijo Prato '] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 3,
        Imagen : xburguer,
        Nome: 'Sanduíche Misto',
        Preço: 8.00,
        Recheio: ['2 Fatias de Pão de caixa', 'Queijo Prato','Presunto'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 4,
        Imagen : xburguer,
        Nome: 'Americano',
        Preço: 12.50,
        Recheio: ['3 Fatias de Pão de caixa','Queijo Prato ','Ovo' ,'Alface', ' Tomate', ', Presunto'],
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 5,
        Imagen : xburguer,
        Nome: 'Hamburque',
        Preço: 8.50,
        Recheio: ['Hamburguer Tradicional', 'Bacon', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 6,
        Imagen : xburguer,
        Nome: 'X Calabresa',
        Preço: 12.50,
        Recheio: ['Hamburguer Tradicional', 'Calabresa', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 7,
        Imagen : xburguer,
        Nome: 'X Coalho',
        Preço: 12.50,
        Recheio: ['Hamburguer Tradicional', ', Queijo Coalho', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 8,
        Imagen : xburguer,
        Nome: 'X Dog Burguer',
        Preço: 12.50,
        Recheio: ['Hamburguer Tradicional', 'Salsicha', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 9,
        Imagen : xburguer,
        Nome: 'X Egg Burguer',
        Preço: 12.50,
        Recheio: ['Hamburguer Tradicional', 'Ovo', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 10,
        Imagen : xburguer,
        Nome: 'X Egg Bacon',
        Preço: 14.50,
        Recheio: ['Hamburguer Tradicional', 'Bacon','Ovo','Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 11,
        Imagen : xburguer,
        Nome: 'X Egg Calabresa',
        Preço: 14.50,
        Recheio: ['Hamburguer Tradicional', 'Calabresa','Ovo', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 12,
        Imagen : xburguer,
        Nome: 'X Dog Egg',
        Preço: 16.00,
        Recheio: ['Hamburguer Tradicional', ' Salsicha','Ovo', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 13,
        Imagen : xburguer,
        Nome: 'X Frango',
        Preço: 18.00,
        Recheio: ['Frango Desfiado', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 14,
        Imagen : xburguer,
        Nome: 'Cheddar Burgue',
        Preço: 15.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Cheddar','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 15,
        Imagen : xburguer,
        Nome: 'Cheddar Bacon',
        Preço: 16.50,
        Recheio: ['Hamburguer Tradicional', 'Bacon', 'Queijo Cheddar','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 16,
        Imagen : xburguer,
        Nome: 'X Dobro Burguer',
        Preço: 16.00,
        Recheio: ['2 Hamburguer Tradicional', 'Bacon', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }   ,
    
    {
        id: 17,
        Imagen : xburguer,
        Nome: 'Burguer Especial',
        Preço: 20.00,
        Recheio: ['Hamburguer Tradicional','Bacon', 'Salsicha', 'presunto', 'Ovo', 'Queijo Prato ','Creme de milho' ,'Alface', ' Tomate', 'Maionese da Casa'] ,
        quantity:1,
        category: 'Normal',
    }, 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {
        id: 18,
        Imagen : xburguer,
        Imagen2 : refrigerante,
        Nome: 'X-Burguer',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho' ,' Tomate', 'Maionese da Casa'],
        quantity:1,
        category: 'Combo',
     
    },
    {
        id: 19,
        Imagen : xbacon,
        Imagen2 : refrigerante,
        Nome: 'X-bacon',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho' ,' Tomate', 'Maionese da Casa'],
        quantity:1,
        category: 'Combo',
     
    },   
    {
        id: 20,
        Imagen : xcalabresa,
        Imagen2 : refrigerante,
        Nome: 'X-Calabresa',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho' ,' Tomate', 'Maionese da Casa'],
        quantity:1,
        category: 'Combo',
     
    },   
    {
        id: 21,
        Imagen : xegg,
        Imagen2 : refrigerante,
        Nome: 'X-Egg',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho' ,' Tomate', 'Maionese da Casa'],
        quantity:1,
        category: 'Combo',
     
    },   
    {
        id: 22,
        Imagen : xdog,
        Imagen2 : refrigerante,
        Nome: 'X-Dog',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho' ,' Tomate', 'Maionese da Casa'],
        quantity:1,
        category: 'Combo',
     
    },   
    {
        id: 23,
        Imagen : xburguer,
        Imagen2 : refrigerante,
        Nome: 'X-Qualho',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho' ,' Tomate', 'Maionese da Casa'],
        quantity:1,
        category: 'Combo',
     
    },      
      
]




export default Produto;