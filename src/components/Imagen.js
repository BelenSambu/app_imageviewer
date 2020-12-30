import React, { useState } from 'react';
import './Imagen.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import CardNote from '../components/CardNote';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({

    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
        },
        header: {
        padding: '12px 0',
        borderBottom: '1px solid darkgrey'
        },
        content: {
        padding: "12px 0",
        overflow: 'scroll'
        }

}));

const Imagen = ({imagen}) => {

    // Material UI - configuraciones
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const clases = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    //extraer las variables
    const { download_url, author, url, width, height} = imagen;
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={download_url}  className="car-img-top styleImage" />
                <div className="card-body">
                    <p className="card-text label">{author}</p>
                </div>
                <div className="card-footer">
                    <button
                        type="button"
                        className="btn btn-block btn-primary btnViewDetails"
                        onClick={()=>{
                            handleOpen();
                        }}
                    >Ver Detalle</button>
                <Modal
                    open={open}
                    onClose={() => {
                        handleClose();
                    }}
                >
                    <div style={modalStyle} className={clases.paper}>
                        <h1>{author}</h1>
                        <img className="img-fluid my-4" src={download_url} />
                        <p><a target="_blank" href={url}>Ir a la página</a></p>
                        <CardNote 
                            descriptionImage = {imagen}
                        />
                    </div>
                </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Imagen;