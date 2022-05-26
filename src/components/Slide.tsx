import * as React from 'react';

import './slide.scss'

const Slide = (props: any) => {
    return (
        <section>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    );
}

export default Slide