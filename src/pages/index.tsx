import * as React from "react"

import '../styles/styles.scss'

import Navbar from "../components/Navbar";
import Slide from "../components/Slide";

const IndexPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className={'slides'}>
                <Slide title={"O Licheniu"} id={"o-licheniu"}>
                    <p></p>
                </Slide>
            </div>

        </>
    )
}

export default IndexPage
