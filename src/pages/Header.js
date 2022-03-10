import React from 'react'
import { Button } from '@material-ui/core';
// import { useState, useLayoutEffect } from 'react'
// import { Button, Grid, TextField, Checkbox } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Firebase from '../services/FirebaseConnect'
import { useHistory } from "react-router-dom";
import logo from '../assets/img/logo.png'
import escrita from '../assets/img/escrita.png'
import '../assets/css/navbar.css'

function Header() {
    let history = useHistory();

    const logoff = () => {
        sessionStorage.removeItem("uuid")
        Firebase
            .auth()
            .signOut()
            .then(() => {
                history.push("/");
            }).catch(() => {
                history.push("/");
            })
    }

    return (
        <div className="navheader">
            <span className="spnimgLogo" >
                <img src={logo} alt="Logo" className="imgLogo"/>
            </span>
            <span className="spnimgEscrita">
                <img src={escrita} alt="Logo" className="imgEscrita"/>
            </span>
            <span className="spnbtnSair">
                <Button onClick={logoff} className="btnSair" variant="contained" startIcon={<ExitToAppIcon />}>Sair</Button>
            </span>
        </div>
    );
}

export default Header;
