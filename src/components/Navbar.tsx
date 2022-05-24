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

    return (
        <nav>
            <button
                onClick={AddNavClass}
            >
                <GiHamburgerMenu />
            </button>
            <div className={getClass}>
                <button
                    className={'navigation__button--opened'}
                    onClick={RemNavClass}
                >
                    <GrClose></GrClose>
                </button>
                <div className={'navigation__items'}>
                    <a href="#o-sanktuarium">Test</a>
                    <a href="#o-sanktuarium">Test</a>
                    <a href="#o-sanktuarium">Test</a>
                </div>
            </div>
        </nav>


    );
}

export default Navbar