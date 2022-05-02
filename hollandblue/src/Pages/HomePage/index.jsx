import React from 'react';
import ItemlListContainer from '../../components/ItemListContainer/ItemlListContainer';
import productos from '../../Assets/Productos/Productos';


function HomePage(props) {
    return (
        <div>
            <ItemlListContainer items={productos} />
        </div>
    );
}

export default HomePage;