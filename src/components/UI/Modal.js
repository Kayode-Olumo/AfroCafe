import React from 'react';
import ReactDOM from 'react-dom';
import classes from './styles/Modal.module.css';

const Backdrop = ({closeModal}) => {
    return (
        <div className={classes.backdrop} onClick={closeModal}/>
    )
}

const ModalOverlay = ({ children }) => {
    return (
        <div className={classes.modal}>
           <div className={classes.content}>{children}</div> 
        </div>
    )
}


const Modal = ({ children, closeModal }) => {
  const portalHelper = document.getElementById("overlays")

  return (
    <>
       {ReactDOM.createPortal(<Backdrop closeModal={closeModal}/>, portalHelper)} 
       {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalHelper)}
    </>
  )
}

export default Modal;