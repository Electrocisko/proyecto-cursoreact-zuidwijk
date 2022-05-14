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
        //Este lo hago para que reinicie el stock original, porque si bien vacia el carrito, el stock que fui descontando queda igual.
        window.location.reload(false);
    }

    const removerPorId = (id)=> {
        setListaProductos(listaProductos.filter(element => element.id !== id));
    }

    const removerPorUnidad = (id)=>{
        setListaProductos(listaProductos.filter(element => element.id !== id));
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
            isInCart,
            removerPorUnidad

            }}>
            {children};
        </CartContext.Provider>
    )
};

export default CartContext;