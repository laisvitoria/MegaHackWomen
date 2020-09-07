import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'
import { Header } from './styles'

export default function Menu({color, txColor, display, primaryroute, secondroute, primarytitle, secondtitle, children}){
    return(
        <Header color={color}>
            <h1 style={{color:txColor}}>Donna!</h1>
            <nav id="nav-menu" style={{display: display}}>
                <Link className="option-menu" style={{color: txColor}} to={primaryroute}>{primarytitle}</Link>
                <Link className="option-menu" style={{color: txColor}} to={secondroute}>{secondtitle}</Link>
            </nav>
            {children}
        </Header>
    )
}