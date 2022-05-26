import * as React from 'react'
import { useState } from 'react'

// Icons
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import { GrClose } from '@react-icons/all-files/gr/GrClose'

// Styles
import './navbar.scss'

const Navbar = () => {
    const [getClass, setClass] = useState('navigation');

    const AddNavClass = () => {
        setClass(getClass + ' navigation--active');
    }
    const RemNavClass = () => {
        setClass(getClass.replace(' navigation--active', ''));
    }
    const Scroll = () => {
        const windowY: number = window.screenY;
        console.log(window.screenY)

        const calculatedPositon: number = windowY * 2;

        window.scrollTo(0, calculatedPositon);
    }

    return (
        <nav>
            <button
                className={'button__menu'}
                onClick={AddNavClass}
            >
                <GiHamburgerMenu />
            </button>
            <div className={getClass}>
                <button
                    className={'navigation__button--opened button__menu'}
                    onClick={RemNavClass}
                >
                    <GrClose></GrClose>
                </button>
                <div className={'navigation__items'}>
                    <button onClick={Scroll}>Test</button>
                    <a href="#o-sanktuarium">Test</a>
                    <a href="#o-sanktuarium">Test</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar