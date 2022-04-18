import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Home from './paginas/Home';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';



const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact={true} path="/Login" element={<Login/>} />
                <Route exact={true} path="/Cadastro" element={<Cadastro/>} />
               
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;