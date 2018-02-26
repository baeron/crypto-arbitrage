import React from 'react';
import Aux from '../../hoc/AuxCmponent';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDraver, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;