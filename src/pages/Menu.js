import React, { useState } from 'react'

import { MenuItem, } from '@material-ui/core';
// import { Button, Grid, Paper, MenuList } from '@material-ui/core';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import { useHistory } from "react-router-dom";
// import Firebase from '../services/FirebaseConnect'
// import logoPrn from '../assets/img/logoPrn.png'

import IncluirCaso from './screen/IncluirCaso'
import ListarCasos from './screen/ListarCasos'
import ExcluirCasos from './screen/ExcluirCasos'

import ListarClientes from './screen/ListarClientes'
import IncluirCliente from './screen/IncluirCliente'


import ListarRecados from './screen/ListarRecados'
import Header from './Header'
import ListarRecados from './screen/ListarRecados'
import Header from '../pages/Header'
import '../assets/css/navbar.css'
// #f0f5f9

export default function Menu() {

    const [screen, setScreen] = useState(0)


    let itensMenu = {
        height: '50px'
    }
    return (
        <div>
            <Header />
            <Grid container spacing={1}>
                <Grid item sm={10} xs={12}>

                </Grid>
                <Grid item sm={2} xs={12}>
                </Grid>
                <div style={{ 'width': '120px','marginRight':'10px' }}>
                    <Paper>
                        <MenuList >
                            <MenuItem onClick={() => setScreen(0)} >Pagina Inicial</MenuItem>
                            <div style={{ 'height': '10px' }}><hr/></div>
                            
                            <MenuItem onClick={() => setScreen(1)}>Ordens</MenuItem>
                            <MenuItem onClick={() => setScreen(2)}>Solicitações</MenuItem>
                            <MenuItem onClick={() => setScreen(5)}>Clientes</MenuItem>
                            <MenuItem onClick={() => setScreen(4)}>Mapa</MenuItem>


                            <div style={{ 'height': '150px' }}></div>                          
                            {/* <div style={{ 'height': '10px' }}><hr/></div> */}
                            <MenuItem onClick={() => setScreen(4)}>Lembretes</MenuItem>
                            {/* <div style={{ 'height': '10px' }}><hr/></div> */}
                            {/* <MenuItem><Button onClick={logoff} style={{ 'height': '30px' }} variant="contained" color="primary" startIcon={<ExitToAppIcon />}>Sair</Button></MenuItem> */}
                        </MenuList>
                    </Paper>

        <>
            <Header />
            <div style={{ width: '100%', display: 'block' }}>
                <div className="navmenu">
                    <div style={{ backgroundColor: '#035692', height: '20px' }}></div>
                    <MenuItem style={itensMenu} onClick={() => setScreen(0)} >Pagina Inicial</MenuItem>
                    <MenuItem style={itensMenu} onClick={() => setScreen(1)}>Incluir Caso</MenuItem>
                    <MenuItem style={itensMenu} onClick={() => setScreen(2)}>Excluir Caso</MenuItem>
                    <MenuItem style={itensMenu} onClick={() => setScreen(3)}>Listar Casos</MenuItem>
                    <div style={{ 'height': '150px' }}></div>

                </div>
                <div style={{ textAlign: 'center', float: 'left' }}>

                    {screen === 0 &&
                        <>
                            <div style={{ 'fontSize': '4em' }}>
                                <span style={{ 'fontFamily': 'DejaVu Sans Mono, monospace', 'color': '#ececec', 'textShadow': '0 0 5px #616161 ' }}>

                                    Seja Bem Vindo
                                    </span>

                                    <hr/>
                                </div>
                            </>
                        }
                        {screen === 1 &&
                            <IncluirCaso setScreen={setScreen} />
                        }
                        {screen === 2 &&
                            <ExcluirCasos setScreen={setScreen} />
                        }
                        {screen === 3&&
                            <ListarCasos setScreen={setScreen} />
                        }
                        {screen === 4&&
                            <ListarRecados setScreen={setScreen} />
                        }
                        {screen === 5&&
                            <ListarClientes setScreen={setScreen} />
                        }

                    </div>
                </Grid>

                                <hr />
                                <div style={{ 'marginTop': '20px', 'fontSize': '20px', 'fontFamily': 'DejaVu Sans Mono, monospace', 'color': 'darkgray' }}>

                                    Selecione a opção desejada ao lado
                                    </div>
                            </div>
                        </>
                    }
                    {screen === 1 &&
                        <IncluirCaso setScreen={setScreen} />
                    }
                    {screen === 2 &&
                        <ExcluirCasos setScreen={setScreen} />
                    }
                    {screen === 3 &&
                        <ListarCasos setScreen={setScreen} />
                    }
                    {screen === 4 &&
                        <ListarRecados setScreen={setScreen} />
                    }

                </div>
            </div>
        </>
    )
}
