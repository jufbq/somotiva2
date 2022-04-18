import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import { useState } from 'react'; 



//e-mail, senha, nome, sobrenome e data de nascimento

function Cadastro(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nascimento, setNascimento] = useState('');

 
  const cadastro = () => {
    console.log("apertou")
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
      console.log(user)

    firebase.firestore().collection("user").add({
      email:email,
      senha:password,
      nome:nome,
      sobrenome:sobrenome,
      nascimento:nascimento

    });
  
    })
  }


  return(
    <div>
        <h1>Cadastro</h1>
        <form>
        <label>Email</label>  
        <br/> 
        <input type="text" size="20" name="email" onChange={e=> setEmail(e.target.value)} />
        <br/> 
        <label>Password</label> 
        <br/>  
        <input type="text" size="20" name="Password"onChange={e=> setPassword(e.target.value)}/>
        <br/> 
        <label>Nome</label>  
        <br/> 
        <input type="text" size="20" name="Nome"onChange={e=> setNome(e.target.value)}/>
        <br/> 
        <label>Sobrenome</label>  
        <br/> 
        <input type="text" size="20" name="Sobrenome"onChange={e=> setSobrenome(e.target.value)}/>
        <br/> 
        <label>Data de Nascimento</label> 
        <br/>  
        <input type="text" size="20" name="Nascimento"onChange={e=> setNascimento(e.target.value)}/>
        <br/> 
        </form>
        <br/> 
        <button onClick={cadastro}>Cadastrar</button>
        <>      </>
        <Link to="/"><button>Home</button></Link>
        
    </div>

  )
}



export default Cadastro;