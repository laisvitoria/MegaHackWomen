import React from 'react'
import icon from '../../Assets/nos.svg'

import './styles.css'
import Menu from '../../Components/Menu'

export default function Home(){
    return(
        <div id="body">
            <Menu/>
            <session id="session">
                <img src="https://blush.ly/DsxeCcoSV/p" alt=""/> 
                <div>
                    <h1>Quem Somos?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit
                        fermentum penatibus pellentesque, ultricies praesent curae a mi nunc
                        euismod ornare per nam, neque rutrum scelerisque dignissim vitae quis
                        semper sapien pretium. Cursus molestie ornare lacinia ullamcorper dui nibh,
                        ad adipiscing augue quisque mauris venenatis.
                    </p>
                </div>
            </session>
            <session id="second-session"> 
                <div>
                    <h1>Faça parte da nossa comunidade!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit
                        fermentum penatibus pellentesque, ultricies praesent curae a mi nunc
                        euismod ornare per nam, neque rutrum scelerisque dignissim vitae quis
                        semper sapien pretium. Cursus molestie ornare lacinia ullamcorper dui nibh,
                        ad adipiscing augue quisque mauris venenatis.
                    </p>
                </div>
                <img src="https://blush.ly/whU3p92BK/p" alt=""/>
            </session>
            <session id="third-session">
                <h1>O apoio que você precisava para crescer!</h1>
                <div id="depoimentos">
                    <div class="depoimento">
                        <img src={icon} alt="empreendedora"/>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        fermentum penatibus pellentesque, ultricies praesent curae a mi nunc
                        euismod ornare per nam
                        </p>
                    </div>
                    <div class="depoimento">
                        <img src={icon} alt="empreendedora"/>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        fermentum penatibus pellentesque, ultricies praesent curae a mi nunc
                        euismod ornare per nam
                        </p>
                    </div>
                    <div class="depoimento">
                        <img src={icon} alt="empreendedora"/>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        fermentum penatibus pellentesque, ultricies praesent curae a mi nunc
                        euismod ornare per nam
                        </p>
                    </div>
                </div>
            </session>
            <footer>
                <h2>Contato</h2>
                <h4>email@exemplo.com</h4>
                <h4>(00) 0000-0000</h4>
            </footer>
        </div>
    )
}