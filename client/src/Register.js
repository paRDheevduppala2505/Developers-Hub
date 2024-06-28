import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const Register = () => {
    const [data,setData] = useState({
        fullname:'',
        email:'',
        mobile:'',
        skill:'',
        password:'',
        confirmpassword:'',
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data)
    }
    return (
        <div className="container2">
    <nav className="navbar bg-dark">
        <h1>
            <Link to='/'><i className="fas fa-code"></i> Developers Hub</Link>
        </h1>
        <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    <section className="container">
        <h1 className="textprimary">Sign Up </h1>
        <p className="lead"><i className="fas fa-user"></i>Create your account</p>
        <form className="form" onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
                <input
                 type="text" placeholder="Name" name="fullname" onChange={changeHandler} required />
            </div>
            <div className="form-group">
                <input
                 type="email" placeholder="Email Address" name="email" onChange={changeHandler} />
                </div>
                 <div className="form-group">
                    <input
                     type="text" 
                     placeholder="Mobile"
                     name="mobile"
                     onChange={changeHandler}
                     />
                     </div>
            <div className="form-group">
                <input
                 type="text" placeholder="Skill" name="skill" onChange={changeHandler} />
                 <small className="form-text">Please provide skills by separation of comma <b>(,)</b></small>
            </div>
            <div className="form-group">
                <input
                 type="password" 
                 placeholder="Password"
                 name="password"
                 onChange={changeHandler}
                 />
            </div>
            <div className="form-group">
                <input
                 type="password" 
                 placeholder="ConfirmPassword"
                 name="confirmpassword"
                 onChange={changeHandler}
                 />
            </div>
            <div className="cost">
            <input type="submit" className="btnprimary" value="Register" /></div>
        </form>
        <p className="my-1">
            Already have an account? <Link to="/login"> Sign In </Link>
        </p>
        </section>
</div>
      );
}
 
export default Register;