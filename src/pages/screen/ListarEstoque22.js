import React, { useState, useLayoutEffect } from 'react'
import { Grid, Paper, } from '@material-ui/core';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Firebase from '../../services/FirebaseConnect'


export default function ListarEstoque(props) {

    const [lista, setLista] = useState([])

    useLayoutEffect(() => {


        Firebase
            .database()
            .ref(`/estoque`)
            .on('value', snapchot => {
                if (snapchot.val()) {
                    // converter objetos em listas
                    let dados = snapchot.val()
                    const keys = Object.keys(dados)
                    const lista = keys.map((key) => {
                        return { ...dados[key], id: key }
                    })
                    setLista(lista)
                }
            })

    }, [])



    return (
        <Grid container spacing={1} >
            <Grid item sm={12} xs={12}>
                <div style={{ marginTop: '10px', marginBottom: '20px', 'fontSize': '30px', 'fontFamily': 'DejaVu Sans Mono, monospace', 'color': '#3f51b5', textShadow: '0 0 1px #242c58' }}>
                    Estoque
                </div>
            </Grid>
            <Grid item sm={12} xs={12}>
              
            </Grid>
        </Grid>
    )
}
