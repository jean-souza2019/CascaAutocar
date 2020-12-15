import React, { useState, useLayoutEffect } from 'react'
import { Grid, Paper,Button } from '@material-ui/core';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Firebase from '../../services/FirebaseConnect'

export default function ListarRecados(props) {

    const [lista, setLista] = useState([])

    useLayoutEffect(() => {


        Firebase
            .database()
            .ref(`/recados`)
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

    const Excluir = (item) => {
        console.log(item)
        Firebase
            .database()
            .ref(`/recados/${item.id}`)
            .remove()
    }


    return (
        <Grid container spacing={1} >
            <Grid item sm={12} xs={12}>
                <div style={{ marginTop: '10px', marginBottom: '20px', 'fontSize': '30px', 'fontFamily': 'DejaVu Sans Mono, monospace', 'color': '#3f51b5', textShadow: '0 0 1px #242c58' }}>
                    Recados recebidos
                </div>
            </Grid>
            <Grid item sm={12} xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: '#3f51b5' }}>
                                <TableCell style={{ color: '#fff' }}>Titulo</TableCell>
                                <TableCell style={{ color: '#fff' }} align="right">E-mail</TableCell>
                                <TableCell style={{ color: '#fff' }} align="center">Recado</TableCell>
                                <TableCell style={{ color: '#fff' }} align="center">Opção</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lista.map((item, key) => {
                                return <TableRow key={key}>
                                    <TableCell component="th" scope="row">
                                        {item.titulo}
                                    </TableCell>
                                    <TableCell align="right">{item.email}</TableCell>
                                    <TableCell align="right">{item.recado}</TableCell>
                                    <Button variant="outlined" onClick={() => Excluir(item)} style={{ marginLeft: '5px', backgroundColor: 'red', color: '#fff' }} > Excluir </Button>
 
                                </TableRow>
                            }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}
