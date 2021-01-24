import React, { useState, makeStyles } from 'react'

import { MenuItem, Button } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
// import { Button, Grid, Paper, MenuList } from '@material-ui/core';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import { useHistory } from "react-router-dom";
// import Firebase from '../services/FirebaseConnect'
// import logoPrn from '../assets/img/logoPrn.png'

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Home from '@material-ui/icons/Home';
import Assignment from '@material-ui/icons/Assignment';
import Contacts from '@material-ui/icons/Contacts';
import EventNote from '@material-ui/icons/EventNote';

import Maps from './screen/Maps'
import IncluirCaso from './screen/IncluirCaso'
import ExcluirCasos from './screen/ExcluirCasos'
import ListarEstoque from './screen/ListarEstoque'
import ListarClientes from './screen/ListarClientes'
import Tabela from './screen/tabela'
import Header from '../pages/Header'
import '../assets/css/navbar.css'


export default function Menu() {
    const [screen, setScreen] = useState(0)

    let itensMenu = {
        height: '50px'
    }
    return (
        <>
            <Header />
            <div style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                <span className="navmenu">
                    <div style={{ marginTop: '20px', width: '100%', textAlign: 'center',float:'left' }}>
                        {/* <Avatar alt="Leonardo" src="/static/images/avatar/1.jpg" style={{ width: '70px', height: '70px' }} /> */}
                    </div>
                    <Button onClick={() => setScreen(0)} className="BtnMenu" variant="contained" startIcon={<Home />}>Inicio</Button>
                    <Button onClick={() => setScreen(1)} className="BtnMenu" variant="contained" startIcon={<EventNote />}>Orçamento</Button>
                    <Button onClick={() => setScreen(2)} className="BtnMenu" variant="contained" startIcon={<Assignment />}>Ordem Serviço</Button>
                    <Button onClick={() => setScreen(3)} className="BtnMenu" variant="contained" startIcon={<ShoppingCart />}>Estoque</Button>
                    <Button onClick={() => setScreen(4)} className="BtnMenu" variant="contained" startIcon={<Contacts />}>Clientes</Button>
                    {/* <Button onClick={() => setScreen(5)} className="BtnMenu" variant="contained" startIcon={<Contacts />}>Tabela</Button> */}
                </span>
                <span style={{ textAlign: 'center', float: 'left', width: '80%' }}>

                    {screen === 0 &&
                        // Main
                        <Maps setScreen={setScreen} />

                    }



                    {screen === 1 &&
                        <IncluirCaso setScreen={setScreen} />
                    }
                    {screen === 2 &&
                        <ExcluirCasos setScreen={setScreen} />
                    }
                    {screen === 3 &&
                        <ListarEstoque setScreen={setScreen} />
                    }
                    {screen === 4 &&
                        <ListarClientes setScreen={setScreen} />
                    }{screen === 5 &&
                        <Tabela setScreen={setScreen} />
                    }

                </span>
            </div>
        </>
    )
}
