import React, { Fragment } from 'react';

const CardNote = ({descriptionImage}) => {
    //Destructuring
    const { author, width, height, id } = descriptionImage;

    return (  
        <Fragment>
            <h3>Detalles:</h3> 
            <ul>
                <li><span className="labelSpan">Autor:</span> {author}</li>
                <li><span className="labelSpan">Ancho:</span> {width}</li>
                <li><span className="labelSpan">Alto:</span> {height}</li> 
                <li><span className="labelSpan">Id:</span> {id}</li>
            </ul>
        </Fragment>
     );
}
 
export default CardNote;