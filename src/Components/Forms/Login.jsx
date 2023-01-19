import React, {useState} from 'react';
import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate= useNavigate()
    
    const validate = (email, password) =>{
        if (email === 'david@rick-morty.com' && password === 'Rick&Morty')
            navigate('/characters')
        else
            alert('Login incorret')
            
        }

        const handleSubmit = (e) => {
        e.preventDefault();
        validate(email, password);
        }

    return (
        
        <div className='login'>
            <div className='form'>
                <form onSubmit={handleSubmit} >
                    <input className='placeholder' type='email' placeholder='email' value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <input className='placeholder'  type='password' placeholder='Contraseña' value={password}
                    onChange={e=>setPassword(e.target.value)}/>
                    <button className='button' type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}



export default Login;


