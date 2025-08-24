import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!credentials.username || !credentials.email || !credentials.password) {
            setError("All fields are required.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            await axios.post('http://localhost:8001/api/auth/register', credentials);
            navigate('/login'); // Redirect to login page after successful registration
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong during registration.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="head">REGISTER</h2>
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        className="rInput"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        className="rInput"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        className="rInput"
                        onChange={handleChange}
                    />
                    <button disabled={loading} type="submit" className="rButton">
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                    {error && <span className="error">{error}</span>}
                </form>
            </div>
        </div>
    );
};

export default Register;