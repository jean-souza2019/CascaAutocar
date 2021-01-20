import React, { useState, useLayoutEffect } from 'react'
import { Grid, Paper, Button } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import DeleteForever from '@material-ui/icons/DeleteForever';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Firebase from '../../services/FirebaseConnect'

import CriarProduto from './CriarProduto'
// import EditarProduto from './EditarProduto'



// CSS

import '../../assets/css/client.css'




export default function ListarEstoque(props) {

    const [lista, setLista] = useState([])
    const [screen, setScreen] = useState(0)


    useLayoutEffect(() => {


        Firebase
            .database()
            .ref(`/Estoque`)
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
            .ref(`/Estoque/${item.id}`)
            .remove()
    }
    
    const Editar = (item,data) => {
        console.log(item)
        Firebase
            .database()
            .ref(`/Estoque/${item.id}`)
            .set(data)
    }






    return (
        <span>
            {screen === 0 &&
                <>
                <Grid container spacing={1} >
                    <Grid item sm={12} xs={12}>
                        <div className="corPadrao1" style={{ marginTop: '10px', marginBottom: '10px', fontSize: '30px', fontFamily: 'DejaVu Sans Mono, monospace', color: '#3f51b5', textShadow: '0 0 1px #242c58' }}>
                            Estoque
                        </div>
                        <div style={{ fontSize: '30px', fontFamily: 'DejaVu Sans Mono, monospace', color: '#3f51b5', textAlign: 'right' }}>
                            <Button className="BtnCli" onClick={() => setScreen(1)} variant="contained">Adicionar</Button>

                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow className="corPadrao">
                                        <TableCell style={{ color: '#fff' }}>Descrição</TableCell>
                                        <TableCell style={{ color: '#fff' }} align="center">Endereçamento</TableCell>
                                        <TableCell style={{ color: '#fff' }} align="center">Quantidade</TableCell>
                                        <TableCell style={{ color: '#fff' }} align="center">Valor</TableCell>
                                        <TableCell style={{ color: '#fff',width:'10%' }} align="center">Opções</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {lista.map((item, key) => {
                                        return <TableRow key={key}>
                                            <TableCell component="th" scope="row">{item.descricao}</TableCell>
                                            <TableCell align="center">{item.enderecamento}</TableCell>
                                            <TableCell align="center">{item.quantidade}</TableCell>
                                            <TableCell align="center">{item.valor}</TableCell>
                                            <TableCell align="center"><Edit className="btnEdit" /><DeleteForever className="btnDel" onClick={() => Excluir(item)} /></TableCell>
                                        </TableRow>
                                    }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>
                </>
            }

            {screen === 1 &&
                <CriarProduto setScreen={setScreen} />
            }
            {/* {screen === 2 &&
                <EditarProduto setScreen={setScreen} />
            } */}


        </span>



    )
}
