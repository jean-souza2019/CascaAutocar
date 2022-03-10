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








export default function ListarClientes(props) {

    const [lista, setLista] = useState([])

    useLayoutEffect(() => {


        Firebase
            .database()
            .ref(`/Cadastros`)
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
                    Clientes Cadastrados
                </div>
            </Grid>
            <Grid item sm={12} xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: '#3f51b5' }}>
                                <TableCell style={{ color: '#fff' }}>Nome</TableCell>
                                <TableCell style={{ color: '#fff' }} align="right">CPF</TableCell>
                                <TableCell style={{ color: '#fff' }} align="right">Cidade</TableCell>
                                <TableCell style={{ color: '#fff' }} align="right">Bairro</TableCell>
                                <TableCell style={{ color: '#fff' }} align="right">Telefone</TableCell>
                                <TableCell style={{ color: '#fff' }} align="right">E-mail</TableCell>
                                <TableCell style={{ color: '#fff' }} align="center">Veiculo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lista.map((item, key) => {
                                return <TableRow key={key}>
                                    <TableCell component="th" scope="row">
                                        {item.nome}
                                    </TableCell>
                                    <TableCell align="right">{item.cpf}</TableCell>
                                    <TableCell align="right">{item.cidade}</TableCell>
                                    <TableCell align="right">{item.bairro}</TableCell>
                                    <TableCell align="right">{item.telefone}</TableCell>
                                    <TableCell align="right">{item.email}</TableCell>
                                    <TableCell align="right">{item.veiculo}</TableCell>
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