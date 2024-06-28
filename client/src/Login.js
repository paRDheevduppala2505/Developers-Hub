import React,{useState} from 'react';
import {Link , Redirect} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [auth,setAuth] = useState(false);
    const [data,setData] = useState({
        email:'',
        password:'',
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res => {localStorage.setItem('token',res.data.token);setAuth(true)}
        )
    }
    if(auth){
        return <Redirect to = '/dashboard'/>
    }
    return (
<div className="container2">
    <nav className="navbar bg-dark">
        <h1>
            <Link to='/'><i className="fas fa-code"></i>Developers Hub</Link>
        </h1>
        <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    <section className="container">
        <h1 className="textprimary">Sign In </h1>
        <p className="lead"><i className="fas fa-user"></i>Sign into your account</p>
        <form className="form" onSubmit={submitHandler} action="dashboard.html" autoComplete="off">
            <div className="form-group">
                <input
                 type="email" 
                 placeholder="Email Address"
                 name="email"
                 onChange={changeHandler}
                 required
                 />
            </div>
            <div className="form-group">
                <input
                 type="password" 
                 placeholder="Password"
                 name="password"
                 onChange={changeHandler}                        
                 />
            </div>
            <div className="cost2">
            <input type="submit" className="btnprimary" value="Login" /></div>
        </form>
        <p className="my-1">
            Don't have any account? <Link to="/register"> Sign Up </Link>
        </p>
    </section>
</div>
      )
}
 
export default Login;