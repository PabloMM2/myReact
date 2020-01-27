import React from 'react'
import '../assets/styles/App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const HolaMundo = () =>{

    const callside = () =>{
        document.getElementById('sidebar').className = "sidebar sidebar-ver"
    }
    const closeside = () =>{
        document.getElementById('sidebar').className = " sidebar sidebar-ocultar"
    }

    return(
        <div className="container">
            <div className="navbar">
                
                <FontAwesomeIcon icon={faCoffee}  onClick={callside}/>
                
            </div>
            <div className="sidebar" id="sidebar" >

                <FontAwesomeIcon icon={faCoffee}  onClick={closeside}/>
            </div>
        </div>
    )
}

export default HolaMundo
