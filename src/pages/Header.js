import React, { useState, useLayoutEffect } from 'react'
import { Button, Grid, TextField, Checkbox } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Firebase from '../services/FirebaseConnect'
import { useHistory } from "react-router-dom";
import logo from '../assets/img/logo.png'
import escrita from '../assets/img/escrita.png'

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
        <div style={{
            fontFamily: 'DejaVu Sans Mono, monospace',
            fontSize: "11px",
            width: "100%",
            height: '80px',
            textAlign: "left",
            position: 'relative',
            top: '0',
            display: 'block',
            backgroundColor: 'white'
        }}>
            <span style={{ width: '240px', height: '100%', float: 'left' }}>
                <img src={logo} alt="Logo" style={{ marginRight: '10px', maxWidth: '20em', borderRight: '1px solid #f1f1f1' }} />
            </span>
            <span style={{ width: '40%', height: '100%', float: 'left' }}>
                <img src={escrita} alt="Logo" style={{ marginRight: '10px', maxWidth: '20em' }} />
            </span>
            <span style={{ marginTop: '20px', height: '100%', float: 'right' }}>
                <Button onClick={logoff} style={{ height: '30px', backgroundColor: 'red', color: 'white' }} variant="contained" startIcon={<ExitToAppIcon />}>Sair</Button>
            </span>
        </div>
    );
}

export default Header;
