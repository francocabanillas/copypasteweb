import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
  numped: PropTypes.string,
  pedido:PropTypes.array,
  detallep:PropTypes.array
}

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  numped: "",
  pedido: [],
  detallep: []
}

const Modal = ({
  className,
  children,
  handleClose,
  show,
  closeHidden,
  numped,
  pedido,
  detallep,
  ...props
}) => {

  

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };    
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]); 
  
  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  }

  const stopProgagation = (e) => {
    e.stopPropagation();
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    'modal-video',
    className
  );

  return (
    <>
      {show &&
        
        <div
          {...props}
          className={classes}
          onClick={handleClose}
        >
          
            <div className="cta-inner section-inner">
              {
                pedido.map( (item) => 
                    <label key="item.id"> Pedido N°{item.id} - {item.cliente_nombre} - {item.fecha}</label>
                )
              }  
              <ul>             
                {
                  detallep.map( (sub) => 
                  <li> Pedido N°{sub.articulo_nombre}</li>
                )
                }
              </ul>         
            </div>
            
        </div>
      }
    </>
  )
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;