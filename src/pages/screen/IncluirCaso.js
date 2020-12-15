import React, { useState } from 'react'
import { Button, Grid, TextField, } from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect'
import { v4 as uuidv4 } from 'uuid';

export default function IncluirCaso(props) {

    const [ocorrencia, setOcorrencia] = useState("")
    const [cep, setCep] = useState("")
    const [data, setData] = useState("")
    const [cliente, setCliente] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [descricao, setDescricao] = useState("")

    const limpar = () => {
        setOcorrencia("")
        setCep("")
        setData("")
        setCliente("")
        setTelefone("")
        setEmail("")
        setDescricao("")
    }

    const salvarRegistro = () => {

        let objeto = {
            ocorrencia: ocorrencia,
            cep: cep,
            data: data,
            cliente: cliente,
            telefone: telefone,
            email: email,
            descricao: descricao
        }
        let code = uuidv4()

        Firebase
            .database()
            .ref(`ocorrencias/${code}`)
            .set(objeto)
            .then(() => {
                limpar()
            })
            .catch((erro) => {
                console.log(erro)
            })



    }

    return (
        <Grid container spacing={1} >
            <Grid item sm={12} xs={12}>
                <div style={{ marginTop: '10px', marginBottom: '20px', fontSize: '30px', fontFamily: 'DejaVu Sans Mono, monospace', 'color': '#3f51b5', textShadow: '0 0 1px #242c58' }}>
                    Incluir Novo Caso
                </div>
            </Grid>
            <Grid item sm={10} xs={12}>
                <TextField value={ocorrencia} onChange={(e) => setOcorrencia(e.target.value)} label="Titulo Ocorrencia" variant="outlined"  size="small" type="email" style={{ width: "100%", marginBottom: 10, marginRight: '10px' }} />
                <TextField value={data} onChange={(e) => setData(e.target.value)} type="date" variant="outlined" size="small" style={{ width: "200px", marginBottom: 10 }} />
                <TextField value={cep} onChange={(e) => setCep(e.target.value)} label="Cep" variant="outlined" size="small" type="number" style={{ marginLeft : '25px', width: "300px", marginBottom: 10 }} />
                <hr style={{'color': '#3f51b5'}}/>
                <TextField value={cliente} onChange={(e) => setCliente(e.target.value)} label="Cliente" variant="outlined" size="small" type="text" style={{ width: "100%", marginBottom: 10 }} />
                <TextField value={telefone} onChange={(e) => setTelefone(e.target.value)} label="Telefone" variant="outlined" size="small" type="number" style={{ width: "100%", marginBottom: 10 }} />
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="E-mail" variant="outlined" size="small" type="email" style={{ width: "100%", marginBottom: 10 }} />
                <TextField value={descricao} onChange={(e) => setDescricao(e.target.value)} rows={7}  multiline defaultValue="Default Value" label="Descrição do Fato" variant="outlined"  type="text" style={{ width: "100%", marginBottom: '10px' }} />
                <br />
                <Button variant="outlined" color="primary" onClick={() => props.setScreen(0)}> Cancelar </Button>
                <Button variant="outlined" color="primary" onClick={salvarRegistro} style={{ marginLeft: '5px', backgroundColor: '#3f51b5', color: '#fff' }}> Enviar Dados </Button>
            </Grid>
        </Grid >

    )
}
