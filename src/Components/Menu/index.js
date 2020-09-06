import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'
import { Header } from './styles'

export default function Menu({color, txColor}){
    return(
        <Header color={color}>
            <h1>Olá mundo</h1>
            <nav> 
                <Link style={{color: txColor}} to="/localization">Encontre as Donnas!</Link>
                <Link style={{color: txColor}} to="/login">Entre</Link>
            </nav>
        </Header>
    )
}