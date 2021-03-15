import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {categoria} ) => {
    // const [contador, setContador] = useState(0);
    // const [images, setImages] = useState([]);
    // useEffect( () => {
    //     getGifs( categoria )
    //         // .then( imgs => setImages( imgs ));
    //         .then( setImages );
    // }, [ categoria ]);
    
    // const state = useFetchGifs();
    const { data: images, loading} = useFetchGifs( categoria );
    //console.log(data);
    //console.log(loading);
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn animate__delay-2s">{categoria}</h3>
        {/* { loading ? 'Cargando... ' : 'Data cargada.'} */}
        { loading && <p>Loagind</p> }
        <div className="card-grid">
            {/* <ol> */}
                { 
                    // images.map( imagen => (
                    //     <li key={imagen.id}>{imagen.title}</li>
                    // ))
                    // images.map( ({id, title }) => (
                    //     <li key={id}>{title}</li>
                    // ))
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            // img={img.title}
                            { ...img }
                        />
                    ))
                }
            {/* </ol> */}
            {/* <h4>{contador}</h4>
            <button onClick={ () => setContador( contador + 1)}>clic</button> */}
        </div>
        </>
    );
}
