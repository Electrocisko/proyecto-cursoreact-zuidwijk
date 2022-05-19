import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './about.css';
import Vaca from '../../Assets/imagenes/vaca.jpg'
import Adornos from '../../Assets/imagenes/adornos.jpg'
import Azulejos from '../../Assets/imagenes/azulejos.jpg'


function AboutPage(props) {
    return (
        <div>
            <NavBar/>
            <div className='container-text-about'>
                <div className='text-about'>
                <img className='img-about' src={Vaca} alt='Foto de una estatuilla de vaca'/>
                <p>La cerámica de Delft es una alfarería desarrollada desde finales del siglo XVI en la ciudad Delft en los Países Bajos.</p>
                <p>Se hizo muy popular por la calidad del esmalte cerámico y el refinamiento de sus decoraciones pintadas.</p>
                <p> El esmalte blanco de estaño utilizado permitió a los ceramistas neerlandeses acercarse a la calidad y el aspecto de la     porcelana china, muy valorada en el país e introducida por la Compañía Neerlandesa de las Indias Orientales.</p>
                    <div className='about-container-fotos'>
                        <img  className='about-img' src={Adornos} alt="Adornos" />
                        <div>
                            <p>La cerámica de Delft incluye piezas singulares, además de una importante producción de platos, jarrones y azulejería de paramentos y el típico azulejo figurativo holandés.</p>
                            <p>A comienzos del siglo XVII, el siglo de oro de los Países Bajos permitió a la Compañía Neerlandesa de las Indias Orientales aumentar su comercio con China y la importación de la porcelana como artículo de lujo solo al alcance de las clases más adineradas neerlandesas.</p>
                            <p>En busca de un producto más accesible, los ceramistas de Delft desarrollaron una floreciente industria de loza fina capaz de hacerle la competencia a los objetos importados.</p>
                            <p>La variada producción de vajillas, jarrones, azulejos y baldosas, y la decoración de las piezas con figuras y ambientes típicos del paisaje holandés llegarían a rebasar la geografía flamenca e imponerse en otros países con importante cultura azulejera como Portugal.</p>
                            <p>Las piezas modernas se identifican con la marca escrita: «Delfts Blauw» ('azul de Delft' en idioma neerlandés) que se suele observar en la parte inferior de las piezas. Esta marca «Delfts Blauw»</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default AboutPage;