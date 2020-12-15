import React, { useState } from 'react'
import { Button, TextField, } from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect'
import { useHistory } from "react-router-dom";

export default function CriarUsuario() {
    let history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    const limpar = () => {
        setEmail("")
        setPassword("")
    }

    const salvarRegistro = () => {

        if (email && password) {
            Firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((retorno) => {
                    setMsg("")
                    limpar()
                    alert('Usuário criado com sucesso!')
                    history.push("/");

                })
                .catch((erro) => {
                    console.log(erro)
                    setMsg("Erro ao cadastrar usuário. Preencha corretamente os campos.")
                })


    
        } else {
            setMsg("Necessário prencher todos os campos.")
        }


    }

    return (
        <div style={{ fontSize: '3em', width: '100%', textAlign: 'center' }}>
            <div style={{ marginTop: '10px', marginBottom: '100px' }}>
                <span style={{ fontFamily: 'DejaVu Sans Mono, monospace', color: '#7d7d7d  ', textShadow: '0 0 2px #616161 ' }}>
                    Criar Usuário
            </span>
            </div>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="E-mail" variant="outlined" size="small" type="email" style={{ width: "50%", marginBottom: 10 }} />
            <br />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Senha" variant="outlined" size="small" type="password" style={{ width: "40%" }} />
            <br />
            <span style={{ color: 'red', fontSize: '15px' }}>
                {msg}
            </span>
            <br />
            <Button variant="outlined" color="primary" onClick={() => history.push("/")}> Cancelar </Button>
            <Button variant="outlined" color="primary" onClick={salvarRegistro} style={{ marginLeft: '5px', backgroundColor: '#3f51b5', color: '#fff' }}> Cadastrar </Button>
        </div>
    )
}
