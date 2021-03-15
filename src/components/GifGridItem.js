import React from 'react'

// export const GifGridItem = ( img ) => {
// export const GifGridItem = ( props ) => {
export const GifGridItem = ( {title, url} ) => {
    // console.log(img);
    // console.log(props.img);
    // console.log(props);
    //console.log(id, title, url);
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-2s">
            {/* { img.title} */}
            <img 
                src={ url }
                alt={ title }
            />
            <p>{title}</p>
        </div>
    )
}
