import {createContext, useState} from 'react';



const CartContext = createContext({
    productos:[],
    addProducto: ()=>{},
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

    const removerPorId = (id)=> {
        listaProductos(listaProductos.filter((item) => item.id !== id));
      }

    const isInCart = (id) => {
        listaProductos.find((element)=>element.id === id);
    }

    return(
        <CartContext.Provider value={{
            productos: listaProductos,
            addProducto: addProducto,
            getCartQuantity,
            clear,
            removerPorId,
            isInCart

            }}>
            {children};
        </CartContext.Provider>
    )
};

export default CartContext;