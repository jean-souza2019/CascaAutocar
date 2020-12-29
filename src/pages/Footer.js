import React, { useState, useLayoutEffect } from 'react'
import { Button, Grid, TextField, Checkbox } from '@material-ui/core';
import Firebase from '../services/FirebaseConnect'
import { useHistory } from "react-router-dom";

function Footer() {

    return (
        <div style={{ fontFamily: 'DejaVu Sans Mono, monospace', fontSize: "11px", width: "100%", textAlign: "center", position: 'fixed',bottom:'0'}}>
            &copy; {new Date().getFullYear()} | JMdS.
            
        </div>
    );
}

export default Footer;
