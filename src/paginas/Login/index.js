import React, {Component} from 'react';
import { Link, useHistory, useNavigate } from 'react-router-dom';
import firebase from '../../Firebase';
import { useState } from 'react'; 



//e-mail, senha, nome, sobrenome e data de nascimento

function Login(){

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nascimento, setNascimento] = useState('');
  
   
  let navigate=useNavigate();
 
  const logar = () => {
    console.log("apertou")
  
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      
      firebase.auth().onAuthStateChanged(user => {
        if (user != null) {
          console.log("entrou")
          navigate("../", { replace: true });
          
        }
      })

    })
    
      
    

  }


  return(
    <div>
        <h1>Login</h1>
        <form>
        <label>Email</label>  
        <br/> 
        <input type="text" size="20" name="email" onChange={e=> setEmail(e.target.value)} />
        <br/> 
        <label>Password</label> 
        <br/>  
        <input type="text" size="20" name="Password"onChange={e=> setPassword(e.target.value)}/>
        <br/> 
        
        </form>
        <br/> 
        <button onClick={logar}>Login</button>
        <>      </>
        <Link to="/"><button>Home</button></Link>
        
    </div>

  )
}



export default Login;