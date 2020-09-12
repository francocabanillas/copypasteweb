import React, {Fragment} from 'react';

const Formulario = () => {
    return (
        <Fragment>
            <h2>Ingresa tu numero de pedido</h2>
            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa el numero ID de pedido"
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
    );
}

export default Formulario;