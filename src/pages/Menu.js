import React, { useState } from 'react'

import { Button, Grid, Paper, MenuList, MenuItem, } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import Firebase from '../services/FirebaseConnect'
import logoPrn from '../assets/img/logoPrn.png'

import IncluirCaso from './screen/IncluirCaso'
import ListarCasos from './screen/ListarCasos'
import ExcluirCasos from './screen/ExcluirCasos'

import ListarClientes from './screen/ListarClientes'
import IncluirCliente from './screen/IncluirCliente'


import ListarRecados from './screen/ListarRecados'
import Header from './Header'

export default function Menu() {
    let history = useHistory();

    const [screen, setScreen] = useState(0)

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
                </div>
                {/* </Grid> */}
                <Grid item sm={10} xs={12}>
                    <div style={{ 'textAlign': 'center' }}>

                        {screen === 0 &&
                            <>
                                <div style={{ 'fontSize': '4em' }}>
                                    <div style={{ width: "100%" }}>
                                    <img src={logoPrn} alt="Advocacia" style={{ marginTop: '10px', marginLeft: '10px', marginRight: '10px', width: '400px' }} />
                                    </div>
                                    <span style={{ 'fontFamily': 'DejaVu Sans Mono, monospace', 'color': '#ececec', 'textShadow':'0 0 5px #616161 ' }}>

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

            </Grid>
        </div>
    )
}
