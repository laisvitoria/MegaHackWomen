import React from 'react'

import Menu from '../../Components/Menu'
import LateralMenu from '../../Components/LateralMenu'
import Frame from '../../Components/Frame'
import AuthContainer from '../../Components/AuthContainer'
import Map from '../../Components/Map'

import './styles.css'

export default function SearchDonnas(){
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
                    <div id="session-donna">
                        <h1>Donnas</h1>
                        <session id="container-map">
                         <Map/>
                        </session>
                    </div>
                </Frame>
            </AuthContainer>
        </div>
    )
}