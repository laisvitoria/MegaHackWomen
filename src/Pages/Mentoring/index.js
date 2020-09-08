import React from 'react'

import Menu from '../../Components/Menu'
import AuthContainer from '../../Components/AuthContainer'
import LateralMenu from '../../Components/LateralMenu'
import Frame from '../../Components/Frame'

import './styles.css'

export default function Mentoring(){
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
                    <h1>Solicitar mentoria</h1>
                    <div className="destaques">
                        <form>
                            <div className="input-container">
                                <label>Email</label>
                                <input  type="text" name="email" />
                            </div>
                            <div className="input-container">
                                <label>Senha</label>
                                <input type="password" name="password" />
                            </div>
                            <a id="esqueceu" href="/recuperar">Esqueci a senha</a>
                            <button type="submit">Entrar</button>
                        </form>
                    </div>
                </div>
                </Frame>
            </AuthContainer>
        </div>
    )
}