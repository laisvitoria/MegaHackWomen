import React from 'react'

import './styles.css'

export default function AuthContainer({children}){
    return(
        <div id="container-initial">
            {children}
        </div>
    )
}