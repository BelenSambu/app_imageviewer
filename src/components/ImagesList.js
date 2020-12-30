import React from 'react';
import Imagen from './Imagen';

const ImagesList = ({imagenes}) => {
    
    if(imagenes.length === 0 || !imagenes) return;

    return (
        <div className="col-12 p-5 row ml-20 listImages">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
     );
}
 
export default ImagesList;