import xburguer from '../assets/xburguer.svg'
import xbacon from '../assets/xbacon.svg'
import xcalabresa from '../assets/xcalabresa.svg'
import xdog from '../assets/xdog.svg'
import xegg from '../assets/xegg.svg'
import refrigerante from '../assets/refrigerante.svg'

const Produto = [
    {
        id: 0,
        Nome: 'X-Burguer',
        Preço: 9.00,
        Recheio: ['Hamburguer Tradicional', '1 Fatia de Queijo Prato','Alface',' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 1,
        Nome: 'X-Bacon',
        Preço: 12.00,
        Recheio: ['Hamburguer Tradicional', 'Bacon', 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 2,
        Nome: 'Sanduíche Queijo',
        Preço: 7.00,
        Recheio: ['2 Fatias de Pão de caixa', '2 Fatias Queijo Prato'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 3,
        Nome: 'Sanduíche Misto',
        Preço: 8.00,
        Recheio: ['2 Fatias de Pão de caixa', '1 Fatia Queijo Prato', '1 Fatia de Presunto'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 4,
        Nome: 'Americano',
        Preço: 12.00,
        Recheio: ['3 Fatias de Pão de caixa', 'Queijo Prato ', 'Ovo', 'Alface', ' Tomate', ', Presunto'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 5,
        Nome: 'Hamburgue',
        Preço: 8.00,
        Recheio: ['Hamburguer Tradicional','Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 6,
        Nome: 'X Calabresa',
        Preço: 12.00,
        Recheio: ['Hamburguer Tradicional', 'Calabresa', '1 Fatia de Queijo Prato', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 7,
        Nome: 'X Coalho',
        Preço: 12.00,
        Recheio: ['Hamburguer Tradicional', ', Queijo Coalho', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 8,
        Nome: 'X Dog Burguer',
        Preço: 12.00,
        Recheio: ['Hamburguer Tradicional', 'Salsicha', 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,    
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 9,
        Nome: 'X Egg Burguer',
        Preço: 12.00,
        Recheio: ['Hamburguer Tradicional', 'Salsicha', 'Queijo Prato ', 'Ovo', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 10,
        Nome: 'X Milho',
        Preço: 12.00,
        Recheio: ['Hamburguer Tradicional', 'Milho', 'Presunto', 'Queijo Prato ', 'Ovo','Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 11,
        Nome: 'X Egg Bacon',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Presunto', 'Ovo', 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 12,
        Nome: 'X Egg Calabresa',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Calabresa', 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 13,
        Nome: 'X Dog Egg',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', ' Salsicha', 'Ovo', 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 14,
        Nome: 'X Frango',
        Preço: 14.00,
        Recheio: ['Frango Desfiado', 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 15,
        Nome: 'Cheddar Burgue',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Cheddar', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },  

    {
        id: 16,
        Nome: 'Cheddar Bacon',
        Preço: 16.00,
        Recheio: ['Hamburguer Tradicional', 'Bacon', 'Queijo Cheddar', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },

    {
        id: 17,
        Nome: 'X Dobro Burguer',
        Preço: 16.00,
        Recheio: ['2 Hamburguer Tradicional', 'Bacon', ' 2 Fatia Queijo Prato', 'Bacon', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 18,
        Nome: 'X File de Frango',
        Preço: 14.00,
        Recheio: ['Hamburguer Tradicional', ' Bife de Frango', 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 19,
        Nome: 'X Coração',
        Preço: 15.00,
        Recheio: ['Coração de Galinha' , 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 20,
        Nome: 'X Coração com Bacon',
        Preço: 18.00,
        Recheio: ['Hamburguer Tradicional', ', Coração de Galinha', 'Bacon', , 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 21,
        Nome: 'X Frango com Bacon',
        Preço: 16.00,
        Recheio: ['Frango Desfiado', 'Queijo Prato ', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Normal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },



















    {
        id: 22,
        Imagen: xburguer,
        Imagen2: refrigerante,
        Nome: 'X-Burguer',
        Preço: 12.00,
        Recheio: ['2 Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Combo',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 23,
        Imagen: xbacon,
        Imagen2: refrigerante,
        Nome: 'X-bacon',
        Preço: 13.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Combo',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 24,
        Imagen: xcalabresa,
        Imagen2: refrigerante,
        Nome: 'X-Calabresa',
        Preço: 12.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Combo',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 25,
        Imagen: xegg,
        Imagen2: refrigerante,
        Nome: 'X Dobro Burguer',
        Preço: 13.00,
        Recheio: ['2 Carne de hamburguer', '2 Fatias de Queijo', 'Creme de milho', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Combo',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 26,
        Imagen: xdog,
        Imagen2: refrigerante,
        Nome: 'X-Dog',
        Preço: 13.00,
        Recheio: ['Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Combo',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },
    {
        id: 27,
        Imagen: xburguer,
        Imagen2: refrigerante,
        Nome: 'X-Qualho',
        Preço: 12.00,
        Recheio: ['2 Hamburguer Tradicional', 'Queijo Prato', 'Creme de milho', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Combo',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },









    {
        id:28,
        Imagen: xburguer,
        Nome: 'Hamburgue',
        Preço: 13.00,
        Recheio: ['Hamburguer Tradicional','Artesanal 120g', 'Creme de milho', 'Alface', ' Tomate', 'Maionese da Casa'],
        quantity: 1,
        category: 'Artesanal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]

    },  {
        id: 29,
        Imagen: xburguer,
        Nome: 'X Coalho',
        Preço: 17.00,
        Recheio: ['Hamburguer Tradicional','Artesanal 120g','Queijo Coalho' ,'Creme de milho', 'Alface', ' Tomate'],
        quantity: 1,
        category: 'Artesanal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },  {
        id: 30,
        Imagen: xburguer,
        Nome: 'X Eeg Burguer',
        Preço: 17.00,
        Recheio: ['Hamburguer Tradicional','Artesanal 120g', 'Ovo','Queijo Prato','Creme de milho', 'Alface', ' Tomate'],
        quantity: 1,
        category: 'Artesanal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },  {
        id: 31,
        Imagen: xburguer,
        Nome: 'X Burguer',
        Preço: 15.00,
        Recheio: ['Hamburguer Tradicional','Artesanal 120g','Queijo Prato', 'Creme de milho', 'Alface', ' Tomate'],
        quantity: 1,
        category: 'Artesanal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },  {
        id: 32,
        Imagen: xburguer,
        Nome: 'X Dog Burguer',
        Preço:17.00,
        Recheio: ['Hamburguer Tradicional','Artesanal 120g','Queijo Prato', 'Creme de milho', 'Alface', ' Tomate'],
        quantity: 1,
        category: 'Artesanal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },  {
        id: 33,
        Imagen: xburguer,
        Nome: 'X Bacon',
        Preço: 17.00,
        Recheio: ['Hamburguer Tradicional','Artesanal 120g',' Bacon ','Queijo Prato', 'Creme de milho', 'Alface', ' Tomate'],
        quantity: 1,
        category: 'Artesanal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },  {
        id: 34,
        Imagen: xburguer,
        Nome: 'X Calabresa',
        Preço: 17.00,
        Recheio: ['Hamburguer Tradicional','Artesanal 120g','Calabresa','Queijo Prato', 'Creme de milho', 'Alface', ' Tomate'],
        quantity: 1,
        category: 'Artesanal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },  {
        id: 35,
        Imagen: xburguer,
        Nome: 'Chedaar Burguer',
        Preço: 17.00,
        Recheio: ['Hamburguer Tradicional','Artesanal 120g','Queijo chedaar', 'Creme de milho', 'Alface', ' Tomate'],
        quantity: 1,
        category: 'Artesanal',
        Adicionais: [
            {id:0 ,Nome: 'Queijo Prato', Preço: 2.50, quantidade:0 },
            {id:1 ,Nome: 'Queijo Coalho',Preço: 4.00 , quantidade: 0 },
            {id:2 ,Nome: 'Queijo Chedaar',Preço: 4.00 , quantidade: 0 },
            {id:3 ,Nome: 'Ovo',Preço: 4.00, quantidade: 0  },
            {id:4 ,Nome: 'Salsicha',Preço: 2.50, quantidade: 0  },
            {id:5 ,Nome: 'Calabresa',Preço: 4.00, quantidade: 0  },
            {id:6 ,Nome: 'Bacon',Preço: 4.00, quantidade: 0  },
        ]
    },



























]




export default Produto;