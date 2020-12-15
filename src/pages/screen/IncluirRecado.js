import React, { useState } from 'react'
import { Button, Grid, TextField, } from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect'
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function IncluirRecado() {
    let history = useHistory();

    const [titulo, setTitulo] = useState("")
    const [email, setEmail] = useState("")
    const [recado, setRecado] = useState("")

    const limpar = () => {
        setTitulo("")
        setEmail("")
        setRecado("")
    }

    const salvarRegistro = () => {

        let objeto = {
            titulo: titulo,
            email: email,
            recado: recado
        }
        let code = uuidv4()

        Firebase
            .database()
            .ref(`recados/${code}`)
            .set(objeto)
            .then(() => {
                limpar()
            })
            .catch((erro) => {
                console.log(erro)
            })



    }

    return (
        <Grid container spacing={1} >
            <Grid item sm={12} xs={12}>
                <div style={{ marginTop: '10px', marginBottom: '20px', fontSize: '10px', fontFamily: 'DejaVu Sans Mono, monospace', color: '#7d7d7d', textShadow: '0 0 1px #242c58' }}>
                    <div style={{ fontSize: '4em' }}>
                        <span style={{ fontFamily: 'DejaVu Sans Mono, monospace', color: '#7d7d7d  ', textShadow: '0 0 2px #616161 ' }}>
                            Envie seu recado
                        </span>
                    </div>
                </div>
            </Grid>
            <Grid item sm={10} xs={12}>
                <TextField value={titulo} onChange={(e) => setTitulo(e.target.value)} label="Titulo" variant="outlined" size="small" type="email" style={{ width: "100%", marginBottom: 10, marginRight: '10px' }} />
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="E-mail" variant="outlined" size="small" type="email" style={{ width: "100%", marginBottom: 10 }} />
                <TextField value={recado} onChange={(e) => setRecado(e.target.value)} rows={7} multiline defaultValue="Default Value" label="Recado" variant="outlined" type="text" style={{ width: "100%", marginBottom: '10px' }} />
                <br />
                <Button variant="outlined" color="primary" onClick={() => history.push("/")}> Cancelar </Button>
                <Button variant="outlined" color="primary" onClick={salvarRegistro} style={{ marginLeft: '5px', backgroundColor: '#3f51b5', color: '#fff' }}> Enviar </Button>
            </Grid>
        </Grid >

    )
}
