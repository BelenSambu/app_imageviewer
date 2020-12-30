import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom';
import MensajeError from '../Error';

const Login = () => {

    let history = useHistory();
    //State para iniciar sesión
    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: ''
    });
    //state para errores
    const [ error, guardarError ] = useState(false);
    const { email, password } = usuario;

    const onChange = (e) => {
        guardarError(false)
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario iniciar sesión
    const checkCredenciales = (e) => {

        e.preventDefault();
        //Validar campos vacios y pass
        if( password.trim() == '123456' ) {
            guardarError(false)
        } else guardarError(true)
    
        if( !error && email.trim() !== '' && password.trim() == '123456' ){
            //Error
            guardarError(false);
            //Redireccionamiento
            history.push('/home');
            //Guardar usuario en localhost
            localStorage.setItem('userName', email.trim());           
        };
        
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                >
                    <div className="campo-form">
                        <label
                            htmlFor="email"
                        >Usuario o email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu usuario"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label
                            htmlFor="password"
                        >Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="button" className="btn btn-primario btn-block _btnIniciar" onClick={checkCredenciales} value="Iniciar Sesión" />
                    </div>
                    { error ? <MensajeError mensaje="Usuario o contraseña incorrecta" /> :null }
                </form>
            </div>
        </div>
     );
}
 
export default Login;