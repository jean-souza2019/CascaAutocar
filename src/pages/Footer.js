import React, { useState, useLayoutEffect } from 'react'
import { Button, Grid, TextField, Checkbox } from '@material-ui/core';
import Firebase from '../services/FirebaseConnect'
import { useHistory } from "react-router-dom";

function Footer() {

    return (
        <div style={{  fontFamily: 'DejaVu Sans Mono, monospace', boxShadow: '0 2px 3px #9c9c9c', fontSize:"11px",width: "100%", textAlign: "center", marginTop:"200px" }}>
            &copy; {new Date().getFullYear()} | Jean Marcos, 1116403 | <a style={{textDecoration:"none",color:"black"}} href="http://imed.edu.br">IMED</a>.
            
        </div>
    );
}

export default Footer;
