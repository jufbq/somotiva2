import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login';


class Home extends Component{


    constructor(props){
      super(props);
      this.state={
        estado:'Usuário não logado',
        nome:'',
        sobrenome:'',
        nascimento:''

      }

    }

    render(){
      return(
        <div>
            <h1>Home</h1>
            
            <Link to="/Cadastro"><button>Cadastro</button></Link> <br/>
            <Link to="/Login"><button>Login</button></Link> 
        </div>
      )
    }
}


export default Home;