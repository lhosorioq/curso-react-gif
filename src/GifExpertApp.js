import React, { useState } from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types';

export const GifExpertApp = () => {
    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['Goku']);
    // const handleAdd = () => {
    //     // setCategorias.push('x hunter');
    //     // setCategorias( [...categorias, 'Super Heroe Americano']);
    //     //setCategorias( ['Super Heroe Americano', ...categorias]);
    //     setCategorias( cats => [...cats, 'Super Heroe Americano']);
    // };
    
    return ( 
        <>
            <h2>|Buscador de gifs | Luigi | giphy |</h2>
            <hr/>
            <AddCategoria setCategorias={ setCategorias } />
            {/* <button onClick={handleAdd}>Agregar item</button> */}
            <hr/>
            <ol>
                { 
                    categorias.map( cat =>( 
                        <GifGrid 
                            key={ cat } 
                            categoria={ cat } 
                        />
                    ))
                }
            </ol>
        </>
    );
};

// GifExpertApp.propTypes = {};

// export default GifExpertApp;

            // categorias.map( cat => {
            //     return <li key={ cat }> {cat} </li>
            // })