import React from 'react'

import './styles.css'

export default function Frame({children}){
    return(
        <div id="frame-container">
            {children}
        </div>
    )
}