import React from 'react'

import Menu from '../../Components/Menu'
import AuthContainer from '../../Components/AuthContainer'
import LateralMenu from '../../Components/LateralMenu'
import Frame from '../../Components/Frame'

import './styles.css'

export default function Events(){
    return(
        <div>
            <Menu txColor="#b4065a" color="#ffffff" 
                primaryroute="/donnas" 
                primarytitle="Encontre as Donnas!"
                secondtitle="Meu perfil"
                secondroute="/profile"
            />
            <AuthContainer>
                <LateralMenu/>
                <Frame>
                <div id="session-destaque">
                    <h1>Destaques</h1>
                    <div className="destaques">
                        <div className="card">
                            <h2 className="text-card">Semana do Empreendedorismo</h2>
                        </div>
                        <div className="card">
                            <h2 className="text-card">Semana do Empreendedorismo</h2>
                        </div>
                        <div className="card">
                            <h2 className="text-card">Semana do Empreendedorismo</h2>
                        </div>
                    </div>
                </div>
                </Frame>
            </AuthContainer>
        </div>
    )
}