import React from 'react';
import './ItemListContainer.css'

function ItemlListContainer(props) {
    return (
        <div id='itemListContainer'>
            <h2>{props.greeting}</h2>
        </div>
    );
}

export default ItemlListContainer;