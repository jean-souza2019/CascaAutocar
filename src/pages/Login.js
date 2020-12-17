import React, { useState, useLayoutEffect } from 'react'
import { Button, Grid, TextField, Checkbox } from '@material-ui/core';
import Firebase from '../services/FirebaseConnect'
import { useHistory } from "react-router-dom";
import logoPrn from '../assets/img/logoPrn.png'

function Login() {
    let history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [lembreme, setLembreme] = useState(false)


    useLayoutEffect(() => {

        let emailStorage = localStorage.getItem("email")
        let passwordStorage = localStorage.getItem("password")
        if (emailStorage && passwordStorage) {
            setEmail(emailStorage)
            setPassword(passwordStorage)
            setLembreme(true)
        }

    }, [])


    const login = () => {

        if (lembreme === false) {
            localStorage.removeItem("email")
            localStorage.removeItem("password")
        }

        Firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((retorno) => {
                sessionStorage.setItem("uuid", retorno.user.uid)
                if (lembreme === true) {
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                }
                setMsg("")
                history.push("/menu");

            })
            .catch((erro) => {
                console.log(erro)
                setMsg("Usuário ou senha inválidos!")
            })
    }
    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            {/* <div style={{ width: "100%", textAlign: "left"}}>
                <Button style={{ height: '30px', color: '#585858', textShadow: '0 0 0.8px #afafaf ' }} variant="contained" onClick={() => history.push("/Recado")}>Enviar Recado</Button>
            </div> */}
            <div style={{ width: "100%" }}>
                <img src={logoPrn} alt="Advocacia" style={{ 'marginTop': '10px', 'marginLeft': '10px', 'marginRight': '10px', 'width': '400px' }} />
            </div>
            <div style={{ width: "100%" }}>
                <TextField id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="E-mail" variant="outlined" type="email" size="small" style={{ width: "300px" }} />
                <br />
                <TextField id="senha" value={password} onChange={(e) => setPassword(e.target.value)} label="Senha" variant="outlined" type="password" size="small" style={{ width: "255px", marginTop: "10px" }} />
            </div>
            <span style={{ color: 'red' }}>
                {msg}
            </span>
            <br />
            <Grid item sm={12} xs={12} style={{ 'marginTop': '10px' }}>
                <Checkbox checked={lembreme} onChange={(e) => setLembreme(e.target.checked)} inputProps={{ 'aria-label': 'primary checkbox' }} /> Lembre-me
                <br/>
                {/* <Button onClick={() => history.push("/criarUser")} variant="contained" id="logar" style={{ marginLeft: '20px', marginBottom: "15px", color: '#585858', textShadow:'0 0 0.8px #afafaf ' }}>Cadastre-se</Button> */}
                <Button onClick={() => login()} variant="contained" color="primary" id="logar" style={{ marginLeft: '20px', marginBottom: "15px", backgroundColor: "#0c66ab", textShadow: '0 0 4px  black' }}>Entrar</Button>

            </Grid>
        </div>
    );
}

export default Login;
