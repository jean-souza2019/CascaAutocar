import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect';
import { v4 as uuidv4 } from 'uuid';



// import cx from 'classnames';WS
// import Header from '../../Main/Header';
// import Footer from '../../Main/Footer';
// import SideBar from '../../../components/SideBar';

export default function CriarCliente(
    { mobileNavVisibility,
  hideMobileMenu,
  history }) {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [cep, setCep] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [endereco, setEndereco] = useState("")
  const [veiculo, setVeiculo] = useState("")
  const [placa, setPlaca] = useState("")
  const [ano, setAno] = useState("")

  const limpar = () => {
    setNome("")
    setTelefone("")
    setCpf("")
    setEmail("")
    setCep("")
    setCidade("")
    setBairro("")
    setEndereco("")
    setVeiculo("")
    setPlaca("")
    setAno("")
  }

  const salvarRegistro = () => {
    let objeto = {
      nome: nome,
      telefone: telefone,
      cpf: cpf,
      email: email,
      cep: cep,
      cidade: cidade,
      bairro: bairro,
      endereco: endereco,
      veiculo: veiculo,
      placa: placa,
      ano: ano
    }

    let code = uuidv4()

    Firebase
      .database()
      .ref(`Cadastros/${code}`)
      .set(objeto)
      .then(() => {
        limpar()
        console.log("dados salvos")
      })
      .catch((erro) => {
        console.log(erro)
      })


  }

  return (
    <div className={({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
        <div className="close-layer" onClick={hideMobileMenu}></div>
        {/* <SideBar /> */}

        <div className="main-panel">
          {/* <Header /> */}
          <div>

            <div className="header">
              <h4 className="title">Cadastrar Cliente</h4>
            </div>
            <div className="content buttons-with-margin" >
              <TextField id="INnome" value={nome} onChange={(e) => setNome(e.target.value)} label="Nome" variant="outlined" type="text" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <TextField id="INtelefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} label="Telefone" variant="outlined" type="number" placeholder="Ex.: (00) 0000-0000" data-mask="(00)00000-0000" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <TextField id="INcpf" value={cpf} onChange={(e) => setCpf(e.target.value)} label="CPF/CNPJ" variant="outlined" type="number" size="small" placeholder="Ex.: 000.000.000-00 / 00.000.000/0000-00" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <TextField id="INemail" required value={email} onChange={(e) => setEmail(e.target.value)} label="E-mail" variant="outlined" type="email" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <TextField id="INcep" value={cep} onChange={(e) => setCep(e.target.value)} label="CEP" variant="outlined" type="number" placeholder="Ex.: 00000-000" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <TextField id="INcidade" value={cidade} onChange={(e) => setCidade(e.target.value)} label="Cidade" variant="outlined" type="text" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <TextField id="INbairro" value={bairro} onChange={(e) => setBairro(e.target.value)} label="Bairro" variant="outlined" type="text" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <TextField id="INedereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} label="Endereço" variant="outlined" type="text" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <hr />
              <TextField id="INveiculo" value={veiculo} onChange={(e) => setVeiculo(e.target.value)} label="Veiculo" variant="outlined" type="text" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <TextField id="INplaca" value={placa} onChange={(e) => setPlaca(e.target.value)} label="Placa" variant="outlined" type="text" placeholder="Ex.: AAAA-0000 / AAA0A00" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />
              <TextField id="INano" value={ano} onChange={(e) => setAno(e.target.value)} label="Ano/Modelo" variant="outlined" type="text" size="small" style={{ width: "45%", "margin-bottom": "15px", "margin-left": "15px" }} />

              <br />
              <hr />


            </div>
            {/* <br/> */}
            <div style={{ "textAlign": "center", "margin-bottom": "15px" }}>
              <Button variant="contained" onClick={salvarRegistro} color="primary">Cadastrar</Button>
            </div>
          </div>

        

        </div>
      </div>
    </div>


  )
}
