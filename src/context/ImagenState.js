import React, { useState, useEffect } from 'react';
import axios from 'axios';
import proyectoContext from './ImagenContext';


const ImagenState = props => {

    //CARGAR IMAGENES
    const [ imagenes, guardarImagenes ] = useState([]);
    //Paginado
    const [ paginaactual, guardarPaginaActual ] = useState(1);
    const [ totalpaginas, guardarTotalPaginas ] = useState(1);

    const consultarAPIPicsum = async() => {
        const imagenesPorPagina = 10;
        const url = `https://picsum.photos/v2/list?page=${paginaactual}&limit=${imagenesPorPagina}` 
        const url2 = `https://picsum.photos/v2/list `;
        axios.all([
            axios.get(url),
            axios.get(url2)
        ]).then(axios.spread((porpagina, lista) => {
            guardarImagenes(porpagina.data);
            //Calcular total páginas
            const calcularTotalPaginas = Math.ceil(lista.data.length/imagenesPorPagina);
            guardarTotalPaginas(calcularTotalPaginas);
        })).catch(error => {
            console.log(error)
        });

    }
    if(imagenes.length === 0) {
        consultarAPIPicsum();
        // return;
    }
    //Cuando cambia la busqueda
    useEffect(() => {
        if(imagenes.length !== 0) return;
        consultarAPIPicsum();
    },[ paginaactual ])


    return (
        <proyectoContext.Provider
            value={{
            
                imagenes: imagenes,
                paginaactual,
                totalpaginas,
                guardarPaginaActual,
                guardarImagenes
            
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ImagenState;