import React, { useState } from 'react'

import { MenuItem, } from '@material-ui/core';
// import { Button, Grid, Paper, MenuList } from '@material-ui/core';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import { useHistory } from "react-router-dom";
// import Firebase from '../services/FirebaseConnect'
// import logoPrn from '../assets/img/logoPrn.png'

import IncluirCaso from './screen/IncluirCaso'
import ExcluirCasos from './screen/ExcluirCasos'
import ListarCasos from './screen/ListarCasos'
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
