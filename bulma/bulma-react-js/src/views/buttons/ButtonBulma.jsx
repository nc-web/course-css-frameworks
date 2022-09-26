
import React, { Fragment } from 'react';

// Componentes Bulma
import Button from 'react-bulma-components/lib/components/button';

function ButtonBulma() {
    return(
        <Fragment>
            <Button
            renderAs="span"
            color="success"
            >
            Save changes
            </Button>
        </Fragment>
    );
}

export default ButtonBulma;