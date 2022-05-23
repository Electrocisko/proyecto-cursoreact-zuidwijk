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
        setListaProductos(listaProductos.filter(element => element.id !== id));
    }

    
    const isInCart = (id) => {
        listaProductos.find((element)=>element.id === id);
    }

    const unitsPerProduct = (id) => {
        const foundInCart = listaProductos.find((item) => item.id === id);
        return foundInCart ? foundInCart.quantity : 0;
      };

      const removeOneUnit = (id) => {
        if (unitsPerProduct(id) === 1) {
          return removerPorId(id);
        }
        setListaProductos(
            listaProductos.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
        );
      };

       const addOneUnit = (producto) => {
        setListaProductos(listaProductos.map(p => p.id === producto.id ? {...p, quantity: p.quantity + 1} : p));
      };  

      
      const getTotalPrice = () => {
        return listaProductos.reduce((total, el) => {
            return total + (el.quantity * el.price);
        }, 0)
    }



    return(
        <CartContext.Provider value={{
            productos: listaProductos,
            addProducto: addProducto,
            getCartQuantity,
            clear,
            removerPorId,
            isInCart,
            unitsPerProduct,
            removeOneUnit,
            addOneUnit,
            getTotalPrice

            }}>
            {children};
        </CartContext.Provider>
    )
};

export default CartContext;