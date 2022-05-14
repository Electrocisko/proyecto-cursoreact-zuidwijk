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
            addOneUnit

            }}>
            {children};
        </CartContext.Provider>
    )
};

export default CartContext;