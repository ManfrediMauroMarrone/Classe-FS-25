import React, { useState } from "react";

function Login(){
const [username, setUsername]=useState("");
const [password, setPassword]=useState("");
const [rememberMe, setRememberMe]=useState("");

const handleUsernameChange=(event) =>{
    setUsername(event.target.value);
}

const handlePasswordChange=(event) =>{
    setPassword(event.target.value);
}

const handleSubmit=(event) =>{
    setPassword(event.target.value);
}

const handleRememberMe=(event) =>{
    setRememberMe(event.target.value);
}


return (
    <form onSubmit={handleSubmit}>
    <h2>Login</h2>
    <div className="form-group">
        <label htmlFor="username">Nome Utente</label>
        <input type="text" className="userName" id="username" value={username} onChange={handleUsernameChange}/>
        </div>
    
    <div className="form-password">
        <label htmlFor="password">Password</label>
        <input type="text" className="password" id="password" value={password} onChange={handlePasswordChange} />
    </div>
    <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="ricordami" checked={rememberMe} onChange={handleRememberMe}/>
        <label htmlFor="form-check-label">Ricordami</label>

    </div>
    <button type="submit" className="button">Accedi</button>
    </form>
);

}

export default Login
