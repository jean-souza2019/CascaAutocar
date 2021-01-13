import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Paper } from '@material-ui/core';



// CSS

import '../../assets/css/client.css'


export default function CriarProduto() {

  const [descricao, setDescricao] = useState("")
  const [enderecamento, setEnderecamento] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [valor, setValor] = useState("")

  const limpar = () => {
    setDescricao("")
    setEnderecamento("")
    setQuantidade("")
    setValor("")
  }

  const salvarRegistro = () => {
    let objeto = {
      descricao: descricao,
      enderecamento: enderecamento,
      quantidade: quantidade,
      valor: valor
    }

    let code = uuidv4()

    Firebase
      .database()
      .ref(`Estoque/${code}`)
      .set(objeto)
      .then(() => {
        limpar()
        console.log("Incluido novo item!")
        alert("Incluido novo item!")
      })
      .catch((erro) => {
        console.log(erro)
      })


  }


  return (
    <span>
      <Grid item sm={12} xs={12}>
        <div style={{ marginTop: '10px', marginBottom: '30px', fontSize: '30px', fontFamily: 'DejaVu Sans Mono, monospace', color: '#3f51b5', textShadow: '0 0 1px #242c58' }}>
          Cadastrar Produto
        </div>

      </Grid>
      <Grid item sm={12} xs={12}>
        <TextField id="INdescricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} label="Descrição" variant="outlined" type="text" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
        <TextField id="INenderecamento" value={enderecamento} onChange={(e) => setEnderecamento(e.target.value)} label="Endereçamento" variant="outlined" type="text" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
        <TextField id="INquantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} label="Quantidade" variant="outlined" type="number" size="small"  style={{ width: "30%", "margin-bottom": "15px", "margin-left": "15px" }} />
        <TextField id="INvalor" required value={valor} onChange={(e) => setValor(e.target.value)} label="Valor/u" variant="outlined" type="number" size="small" style={{ width: "30%", "margin-bottom": "15px", "margin-left": "15px" }} />

        <hr style={{ marginTop: '10px', marginBottom: '25px'}}/>


      </Grid>
      <div style={{ "textAlign": "center", "margin-bottom": "15px" }}>
        {/* <Button className="BtnCli" style={{marginRight:'20px'}} onClick={cancelar} variant="contained">Cancelar</Button> */}
        <Button variant="contained" onClick={salvarRegistro} color="primary">Cadastrar</Button>
      </div>

    </span>


  )
}

