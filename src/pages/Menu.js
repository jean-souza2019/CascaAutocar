import React, { useState } from 'react'

import { MenuItem, Button } from '@material-ui/core';
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

import IncluirCaso from './screen/IncluirCaso'
import ExcluirCasos from './screen/ExcluirCasos'
import ListarEstoque from './screen/ListarEstoque'
import Maps from './screen/Maps'
import CriarCliente from './screen/CriarCliente'
import ListarClientes from './screen/ListarClientes'
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
                <span className="navmenu">
                    <div style={{ backgroundColor: '#035692', height: '20px' }}></div>
                    <Button onClick={() => setScreen(0)} className="BtnMenu" variant="contained" startIcon={<Home />}>Inicio</Button>
                    <Button onClick={() => setScreen(1)} className="BtnMenu" variant="contained" startIcon={<EventNote />}>Orçamento</Button>
                    <Button onClick={() => setScreen(2)} className="BtnMenu" variant="contained" startIcon={<Assignment />}>Ordem Serviço</Button>
                    <Button onClick={() => setScreen(3)} className="BtnMenu" variant="contained" startIcon={<ShoppingCart />}>Estoque</Button>
                    <Button onClick={() => setScreen(4)} className="BtnMenu" variant="contained" startIcon={<Contacts />}>Clientes</Button>
                </span>
                <span style={{ textAlign: 'center', float: 'left', width:'80%' }}>

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
                    }
                    {screen === 5 &&
                        <CriarCliente setScreen={setScreen} />
                    }

                </span>
            </div>
        </>
    )
}
