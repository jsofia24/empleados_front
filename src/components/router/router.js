import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../login/login";
import Inicio from '../index/index';

export default function AppRouter() {
   return (
    <Router>
        <Routes>
            <Route exact path="/login" element= {<Login/>}/>
            <Route exact path="/index" element= {<Inicio/>}/>
            <Route path='/*' element= {(
                <h1 style={{marginTop:300}}>404 <br/>Página no encontrada</h1>
            )} 
            />
        </Routes>
    </Router>
     );
    }


