import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategoria = ( { setCategorias } ) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setinputValue( e.target.value );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 0 ) {
            setCategorias( cats => [ inputValue, ...cats]);
            setinputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <h1>{inputValue}</h1> */}
            {/* <h2>Adicionar Categoria</h2> */}
            <input 
                type="text" 
                value={inputValue}
                // onChange={ (elem) => console.log(elem) }
                onChange={ handleInputChange }
            />
        </form>
    )
};

AddCategoria.protoType = {
    setCategorias: PropTypes.func.isRequired
}
