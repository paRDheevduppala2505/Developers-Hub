import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="container1">
    <nav className="navbar">
        <h1>
            <Link to='/'><i className="fas fa-code"></i>Developers Hub</Link>
        </h1>
        <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    <section className="landing56">
        <div className="dark-overlay">
            <div className="landing-1name">
            <h1 className="xlarge">Developers Hub</h1>
            <p className="lead1">
                Create a developer profile/portfolio, share posts and get help from other developers
            </p>
            <div className="buttons">
                <button className="btn-primary"><Link to="/register">Sign Up</Link></button>
                <button className="btn-light"> <Link to="/login">Login</Link></button>
            </div>
            </div>
        </div>
    </section>
</div>
     );
}
 
export default Home