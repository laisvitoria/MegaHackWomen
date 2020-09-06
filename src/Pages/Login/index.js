import React from 'react'
import { Link } from 'react-router-dom'
import  * as yup from 'yup'
import {  ErrorMessage, Formik } from 'formik'

import './styles.css'
import Menu from '../../Components/Menu'

export default function Login(){
    const validations = yup.object().shape({
        email: yup.string().email('Informe um e-mail!').required('Este campo é obrigatório!'),
        password: yup.string().required('Este campo é obrigatório!').min(6, 'Informe pelo menos 6 dígitos')
    })
    
    return(
        <div>
            <Menu txColor="#b4065a"/>
            <div id="container">
                <img src="https://blush.ly/Ur5ffJbern/p" alt="sayHi"/>
                <h1>Olá! Seja bem vinda!</h1>
                <Formik initialValues={{email: '', password:''}} onSubmit={() => alert('ok')} validationSchema={validations}>
                {({ handleBlur, handleChange, handleSubmit, values}) =>(
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>Email</label>
                            <input  type="text" name="email" onBlur={handleBlur} onChange={handleChange} value={values.email}/>
                            <ErrorMessage style={{color: 'yellow'}} component="span" name="email"/>
                        </div>
                        <div className="input-container">
                            <label>Senha</label>
                            <input type="password" name="password" onBlur={handleBlur} onChange={handleChange}  value={values.password}/>
                            <ErrorMessage style={{color: 'yellow'}} component="span" name="password"/>
                        </div>
                        <a id="esqueceu" href="/recuperar">Esqueci a senha</a>
                        <button type="submit">Entrar</button>
                        <div id="cadastro">
                            <p>ou</p> <Link id='link-cadastro' to="/cadastro">Cadastre-se</Link>
                        </div>
                    </form>
                )}
                </Formik>
            </div>
        </div>
    )
}