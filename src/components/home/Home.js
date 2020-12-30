import React, { useState, useEffect, useContext } from 'react';
import ImagesList from '../ImagesList';
import imagenContext from '../../context/ImagenContext';
import Sidebar from '../layout/SideBar';

function Home() {

  //Context
  const imagenesContext = useContext(imagenContext);
  const { imagenes, paginaactual, totalpaginas, guardarPaginaActual, guardarImagenes } = imagenesContext; 
    
  // Definir pagina anterior
  const _OnClickPaginaAnterior = (e) => {
    e.preventDefault();
    const nuevaPaginaActual = paginaactual - 1;
    if( nuevaPaginaActual === 0 ) return;
    guardarImagenes([]);
    guardarPaginaActual(nuevaPaginaActual);

    //Mover la pantalla hacia arriba - scroll
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({ behavior: 'smooth' })
  }

  //Definir pagina siguiente
  const _OnClickPaginaSiguiente = (e) => {
    e.preventDefault();
    const nuevaPaginaActual = paginaactual + 1;
    if(nuevaPaginaActual > totalpaginas) return;
    guardarImagenes([]);
    guardarPaginaActual(nuevaPaginaActual);
    
    //Mover la pantalla hacia arriba - scroll
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({ behavior: 'smooth' })
  }
  

  return (
    <div className="contenedor-app">
    <Sidebar />
     <div className="jumbotron">
     </div>
        { imagenes.length !== 0 ? 
              <div className="row justify-content-center containerImages">
              <ImagesList 
                imagenes={imagenes}
              />
              <div className="row justify-content-center btnNextPrevious">
                { (paginaactual === 1) ? null : (
                    <button
                        type="button"
                        className="bbtn btn-info mr-1"
                        onClick={_OnClickPaginaAnterior}
                    >&laquo; Anterior</button>
                ) }
                { (paginaactual === totalpaginas) ? null : (
                    <button
                    type="button"
                    className="bbtn btn-info"
                    onClick={_OnClickPaginaSiguiente}
                    >Siguiente &raquo;</button>
                ) }
              </div>
            </div> : null
        }
    </div>
  );
}

export default Home;
