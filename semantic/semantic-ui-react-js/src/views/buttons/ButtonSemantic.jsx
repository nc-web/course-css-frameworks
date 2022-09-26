
import React, { Fragment } from 'react';

// Componentes Semantic
import { Button, Icon, Label } from 'semantic-ui-react';

function ButtonSemantic () {
    return(
        <Fragment>

            <Button> Boton semantic </Button>
            <Button primary> Primary </Button>
            <Button secondary> Secondary </Button>

            <Button as='div' labelPosition='right'>
                <Button color='red'>
                    <Icon name='heart' />
                    Like
                </Button>
                <Label as='a' basic color='red' pointing='left'>
                    2,048
                </Label>
            </Button>

            <Button.Group>
                <Button>Cancel</Button>
                <Button.Or />
                <Button positive>Save</Button>
            </Button.Group>

            <Button loading primary>
                Loading
            </Button>

        </Fragment>
    );
}

export default ButtonSemantic;