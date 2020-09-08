import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'
import logo from '../../Assets/logo-colorida-small.jpg'
import { Header } from './styles'

export default function Menu({color, txColor, display, primaryroute, secondroute, primarytitle, secondtitle, children}){
    return(
        <Header color={color}>
            <img style={{width: '200px'}} src={logo} alt='logo'/>
            <nav id="nav-menu" style={{display: display}}>
                <Link className="option-menu" style={{color: txColor}} to={primaryroute}>{primarytitle}</Link>
                <Link className="option-menu" style={{color: txColor}} to={secondroute}>{secondtitle}</Link>
            </nav>
            {children}
        </Header>
    )
}