import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import './styles.css'
export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {show: 'none'};
      }

    render() {
      return (
        <div>
            <Map
            google={this.props.google}
            zoom={15}
            initialCenter={{ lat: -10.9407009, lng: -37.0858932}}
            containerStyle={{
                width: '900px',
                height: '450px',
            }}
            >
                <Marker
                title={'Confeitaria da Fernanda'}
                name={'Confeitaria da Fernanda'}
                position={{lat: -10.9302756, lng: -37.0776606}} />
                <Marker
                name={'Susan Modas'}
                position={{lat: -10.9355479, lng: -37.084629}} />
                <Marker onClick={() => this.setState({show: ' '})}
                title={'Confeitaria da Fernanda'}
                name={'Confeitaria da Fernanda'}/>
            </Map>
                <div id="details" style={{display: this.state.show}}>
                    <p id='close' onClick={() => this.setState({show: 'none'})}>x</p>
                    <div id="top">
                        <img id='perfil' src="https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg" alt="perfil"/>
                        <h3>Confeitaria da Fernanda</h3>
                    </div>
                    <div>
                        <div id="description">
                            <h4>Descrição</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit
                                fermentum penatibus pellentesque, ultricies praesent curae a mi nunc
                                euismod
                            </p>
                        </div>
                        <div id="contato">
                            <button>Amadrinhar</button>
                            <button>Enviar mensagem</button>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
  }

  export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyDJCK2LZsa4bIUEr_50QSluJiNQuhxY1GY',
    }
  ))(MapContainer)