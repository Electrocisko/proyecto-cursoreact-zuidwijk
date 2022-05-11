import {createContext, useState} from 'react';



const CartContext = createContext({
    productos:[],
    addProducto: ()=>{}
});

export const CartContextProvider = ({children})=>{

    const [listaProductos, setListaProductos] = useState([]);

   
    const addProducto = (producto) => {
        const repeatedItemIndex = listaProductos.findIndex(item => item.id === producto.id)
        if (repeatedItemIndex !== -1) {
            setListaProductos(listaProductos.map(p => p.id === producto.id ? {...p, quantity: p.quantity + producto.quantity} : p));
        } else {
            setListaProductos([producto, ...listaProductos]);
        }
    }

    const getCartQuantity = () => {
        return listaProductos.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }


    const clear = () => {
        setListaProductos([]);
    }








    return(
        <CartContext.Provider value={{
            productos: listaProductos,
            addProducto: addProducto,
            getCartQuantity,
            clear
            }}>
            {children};
        </CartContext.Provider>
    )
};

export default CartContext;