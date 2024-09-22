import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const register = async () => {
        await axios.post('http://localhost:3000/api/auth/register', { email, password });
        alert('User registered!');
    };

    const login = async () => {
        const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
        setToken(response.data.token);
        alert('Logged in!');
    };

    return (
        <div>
            <h1>User Behavior Analysis</h1>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
            <p>Token: {token}</p>
        </div>
    );
}

export default App;
