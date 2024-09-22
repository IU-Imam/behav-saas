import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const register = async () => {
        if (!email || !password) {
            alert('Email and password are required.');
            return;
        }
        if (!isValidEmail(email)) {
            alert('Please enter a valid email.');
            return;
        }

        setLoading(true);
        try {
            await axios.post('http://localhost:3000/api/auth/register', { email, password });
            alert('User registered!');
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed: ' + (error.response ? error.response.data.error : error.message));
        } finally {
            setLoading(false);
        }
    };

    const login = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
            if (response.data.token) {
                setToken(response.data.token);
                alert('Logged in!');
            } else {
                alert('Login failed: no token returned.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed: ' + (error.response ? error.response.data.error : error.message));
        } finally {
            setLoading(false);
        }
    };

    const createCheckoutSession = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/api/auth/create-checkout-session', { planId: 'your_plan_id' }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            window.location = response.data.url; // Redirect to Stripe Checkout
        } catch (error) {
            console.error('Checkout session error:', error);
            alert('Failed to create checkout session: ' + (error.response ? error.response.data.error : error.message));
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setToken('');
        alert('Logged out!');
    };

    return (
        <Router>
            <div>
                <h1>User Behavior Analysis</h1>
                <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button onClick={register} disabled={loading}>Register</button>
                <button onClick={login} disabled={loading}>Login</button>
                <p>Token: {token}</p>
                {token && <button onClick={createCheckoutSession} disabled={loading}>Subscribe</button>}
                {token && <button onClick={logout}>Logout</button>}
                
                <Routes>
                    <Route path="/dashboard" element={token ? <Dashboard token={token} /> : <p>Please log in to view this page.</p>} />
                </Routes>
                {token && <Link to="/dashboard">Go to Dashboard</Link>}
            </div>
        </Router>
    );
}

export default App;
