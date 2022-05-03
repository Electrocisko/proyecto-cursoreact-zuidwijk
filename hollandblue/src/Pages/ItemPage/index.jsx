import React from 'react';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer.jsx';
import NavBar from '../../components/NavBar/NavBar';

function ItemPage(props) {

    return (     
        <div>
            <NavBar/>
            <ItemDetailContainer/>
        </div>
    );
}

export default ItemPage;