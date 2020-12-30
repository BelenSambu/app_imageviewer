import React,  { useEffect, useState } from 'react';
import { useHistory  } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {

    //UseStates - check para dark-mode
    const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
    const [valueUser, setValueUser] = useState(
        localStorage.getItem('userName') || ''
      );

    //Para redireccionar
    let history = useHistory();

    //Función ante cualquier cambio en modo dark-light
    useEffect(() => {
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
      }, [checked]);
    
    //Cambio de modo 
    const toggleThemeChange = () => {
        if (checked === false) {
            localStorage.setItem("theme", "dark");
            setChecked(true);
        } else {
            localStorage.setItem("theme", "light");
            setChecked(false);
        }
    };
    //Al cerrar sesión el usuario
    const _closeSesion = () => {
        //Limpieza de localstorage y redireccionamiento
        setValueUser('');
        localStorage.removeItem('userName');
        setChecked(false);
        localStorage.removeItem('theme');
        history.push('/');
    }

    return ( 
        <aside className="sidenav App-header">
            <h2 className="titleUser">Bienvenid@</h2>
            <div className="_labelUser">{valueUser}</div>
            <div className="proyectos">
            </div>
            <div className="campo-form">
                <input type="submit" className="btn btn-block btnCloseSession" onClick={_closeSesion} value="Cerrar sesión" />
            </div>
            <div className="campo-form clickChangeTheme">
                <p>Clic para cambiar el tema</p>
                <label>
                <input
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => toggleThemeChange()}
                />
                </label>
            </div>
        </aside>
     );
}
 
export default SideBar;