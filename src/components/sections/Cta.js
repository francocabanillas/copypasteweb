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


  const openModal = (e) => {
    e.preventDefault();
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
              ¿Tienes un pedido pendiente? {numPedido}
              </h3>
          </div>
          <div className="cta-action">
            <Input id="buscar" type="number" placeholder="N° de pedido" value={setNumPedido} />
          </div>
          <button className="button" onClick={openModal} >Buscar</button>
        </div>
        <ModalPedido
            id="video-modal"
            show={pedidoModalActive}
            handleClose={closeModal}
            pedido={numPedido} />
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;