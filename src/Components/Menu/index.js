import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'
import { Header } from './styles'

export default function Menu({color, txColor, display, children}){
    return(
        <Header color={color}>
            <h1 style={{color:txColor}}>Donna!</h1>
            <nav id="nav-menu" style={{display: display}}> 
                <Link className="option-menu" style={{color: txColor}} to="/localization">Encontre as Donnas!</Link>
                <Link className="option-menu" style={{color: txColor}} to="/login">Entre</Link>
            </nav>
            {children}
        </Header>
    )
}