import React, { useState } from 'react'

import { Button, Grid, Paper, MenuList, MenuItem, } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import Firebase from '../services/FirebaseConnect'
import logoPrn from '../assets/img/logoPrn.png'

import IncluirCaso from './screen/IncluirCaso'
import ExcluirCasos from './screen/ExcluirCasos'
import ListarCasos from './screen/ListarCasos'
import ListarRecados from './screen/ListarRecados'
import Header from '../pages/Header'


export default function Menu() {
    let history = useHistory();

    const [screen, setScreen] = useState(0)

    // const logoff = () => {
    //     sessionStorage.removeItem("uuid")
    //     Firebase
    //         .auth()
    //         .signOut()
    //         .then(() => {
    //             history.push("/");
    //         }).catch(() => {
    //             history.push("/");
    //         })
    // }

    let itensMenu = {
        height: '40px'
    }
    return (
        <div>
            <Header />
            <div style={{
                height: '89vh',
                width: '200px',
                marginRight: '10px',
                backgroundColor: '#035692',
                marginLeft: '-8px',
                color: 'white'
            }}>
                <div style={{ backgroundColor: '#035692', height: '20px' }}></div>
                <MenuItem style={itensMenu} onClick={() => setScreen(0)} >Pagina Inicial</MenuItem>
                {/* <div style={{ 'height': '10px' }}><hr /></div>

                <MenuItem onClick={() => setScreen(4)}>Recados</MenuItem>
                <div style={{ 'height': '10px' }}><hr /></div> */}
                <MenuItem style={itensMenu} onClick={() => setScreen(1)}>Incluir Caso</MenuItem>
                <MenuItem style={itensMenu} onClick={() => setScreen(2)}>Excluir Caso</MenuItem>
                <MenuItem style={itensMenu} onClick={() => setScreen(3)}>Listar Casos</MenuItem>
                <div style={{ 'height': '150px' }}></div>
                {/* <Button onClick={logoff} style={{ 'height': '30px' }} variant="contained" color="primary" startIcon={<ExitToAppIcon />}>Sair</Button> */}

            </div>
            {/* </Grid> */}
            {/* <Grid container spacing={1}>
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
                                <div style={{'marginTop':'20px', 'fontSize': '20px', 'fontFamily': 'DejaVu Sans Mono, monospace', 'color': 'darkgray' }}>

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
                        {screen === 3&&
                            <ListarCasos setScreen={setScreen} />
                        }
                        {screen === 4&&
                            <ListarRecados setScreen={setScreen} />
                        }

                    </div>
                </Grid>

            </Grid> */}
        </div>
    )
}
