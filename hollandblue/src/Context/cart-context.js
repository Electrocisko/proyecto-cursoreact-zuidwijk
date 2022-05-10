import {createContext, useState} from 'react';



const CartContext = createContext({
    productos:[],
    addProducto: ()=>{}
});

export const CartContextProvider = ({children})=>{

    const [listaProductos, setListaProductos] = useState([]);

    const addProducto = (producto)=>{
        setListaProductos([producto,...listaProductos]);
    }

    return(
        <CartContext.Provider value={{
            productos: listaProductos,
            addProducto: addProducto
            }}>
            {children};
        </CartContext.Provider>
    )
};

export default CartContext;