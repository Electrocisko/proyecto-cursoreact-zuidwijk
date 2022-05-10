import {createContext, useState} from 'react';



const CartContext = createContext({
    productos:[];
});

export const CartContextProvider = ({children})=>{

    const [listaProductos, setListaProductos] = useState([]);

    return(
        <CartContext.Provider value={{productos[listaProductos]}}>
            {children};
        </CartContext.Provider>
    )
};

export default CartContext;