import * as React from 'react';

import './slide.scss'

const Slide = (props: any) => {
    return (
        <main>
            <h2>{props.title}</h2>
            {props.children}
        </main>
    );
}

export default Slide