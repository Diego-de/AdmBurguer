import {action} from 'easy-peasy';

export const dados ={
   Recheio:[],
   setRecheio: action((state,payload)=>{state.Recheio = payload})
}