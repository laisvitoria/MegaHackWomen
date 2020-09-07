import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function LateralMenu(){
    return(
        <nav id="lateral-menu">
            <div className="option">
                <Link className="option-text" to='/profile'>Meu perfil</Link>
            </div>
            <div className="option">
                <Link className="option-text" to='/business'>Meus negócios</Link>
            </div>
            <div className="option">
                <Link className="option-text" to='/mentoring'>Mentorias</Link>
            </div>
            <div className="option">
                <Link className="option-text" to='/events'>Eventos</Link>
            </div>
            <div className="option">
                <Link className="option-text" to='/donnas'>Donnas</Link>
            </div>
            <div className="option">
                <Link className="option-text" to='/partner'>Parcerias</Link>
            </div>
            <div className="option">
                <Link className="option-text" to='/'>Sair</Link>
            </div>
        </nav>
    )
}