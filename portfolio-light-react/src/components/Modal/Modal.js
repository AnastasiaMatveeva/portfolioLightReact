import React from 'react';
import './Modal.scss';
import close from "../../images/close.svg";


const Modal = ({active, setActive, children}) => {

  return (
    <div className={active ? "modal active" : "modal"} onClick={()=>setActive(false)}>
        <div className={active ? "modal__body active" : "modal__body"} onClick={e=>e.stopPropagation()}>
            <div className="modal__header">
            <button className="close__btn" onClick={()=>setActive(false)}>
                <figure>
                    <img src={close} alt="" />
                </figure>
            </button>
            </div>
          
            <div className="modal__content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal;