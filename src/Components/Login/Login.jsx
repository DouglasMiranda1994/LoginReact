import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

import "./Login.css";

const Login = () => {

const [userName, setUserName] = useState("");
const [password, setPassword] =  useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Envio")
}

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>
            <div className="input-field">
              <input type="email" 
              placeholder='E-mail' 
              required
              onChange={(e)=>setUserName(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-field">
                <input type="password" 
                placeholder='Senha' 
                onChange={(e)=>setUserName(e.target.value)}
                />
                <FaLock className="icon" />
            </div>

            <div className="recal-forget">
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Lembre de mim
              </label>
              <a href="#">Esqueceu a Senha?</a>
            </div>
            <button>Entrar</button> 
            <div className="signup-link">
              <p> 
                Criar conta? 
                <a href="#"> Registrar</a>  
              </p>
            </div>
        </form>
    </div>
  )
}

export default Login;
