import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import ModalPedido from '../elements/ModalPedido';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const [pedidoModalActive, setPedidoModalActive] = useState(false);
  const [numPedido, setNumPedido] = useState("");
  const [pedido, setPedido] = useState([]);
  const [detalle, setDetalle] = useState([]);

  const obtenerDatos = async(numero) => {
    console.log('http://copypaste.atwebpages.com/index.php/pedido/'+numero)
    const data = await fetch('http://copypaste.atwebpages.com/index.php/pedido/'+numero)
    const ped = await data.json()
    setPedido(ped)
    if (ped[0]) 
    setDetalle(ped[0].detalle)
    
  }

  const openModal = (e) => {
    e.preventDefault();
    obtenerDatos(numPedido)
    setPedidoModalActive(true);
  }
  
  const closeModal = (e) => {
    e.preventDefault();
    setPedidoModalActive(false);
  }

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              ¿Tienes un pedido pendiente?
              </h3>
          </div>
          <div className="cta-action">
            <Input type="number" required onChange={(e) => setNumPedido(e.target.value)}  placeholder="N° de pedido" />
          </div>
          <button className="button" onClick={openModal} >Buscar</button>
        </div>
        <ModalPedido
            id="video-modal"
            show={pedidoModalActive}
            handleClose={closeModal}
            numped={numPedido}
            pedido={pedido}
            detallep={detalle}/>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;