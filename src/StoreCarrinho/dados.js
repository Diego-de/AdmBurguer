import {createStore,persist} from 'easy-peasy';
import {dados} from './Carrinho';

export const store = createStore(persist(dados));

