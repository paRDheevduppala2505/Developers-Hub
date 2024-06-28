import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allprofiles', {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        }).then(res => setData(res.data))
    }, [])
    if (!localStorage.getItem('token')) {
        return <Redirect to='/login' />
    }

    return (
        <div class="container2">
            <nav className="navbar bg-dark">
                <h1>
                    <Link to='/'><i className="fas fa-code"></i>Developers Hub</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/myprofile">My Profile</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={() => localStorage.removeItem('token')}>Logout</Link>
                    </li>
                </ul>
            </nav>
            <section class="container">
                <h1 class="textprimary3">Developers </h1>
                <div class="lead3"><i className="fab fa-connectdevelop"></i>Browse and connect with developers</div>
                <div class="profiles">
                    {data.length >= 1 ?
                        data.map(profile => 
                        <div class="profilelight">
                            <img class="round-img" src="https://www.gravatar.com/avatar" alt="" />
                            <div>
                                <h2>{profile.fullname}</h2>
                                <p>{profile.email}</p>
                                <p>India</p>
                                <button class="btn-primary"><Link to={'/indprofile/${profile.fullname}/${profile.email}/${profile.skill}/${profile._id}'}>View Profile</Link></button>
                            </div>
                            <ul>
                                {profile.skill.split(",").map(skill =>
                                    <li class="text-primary">
                                        <i className="fas fa-check"></i>{skill}
                                    </li>
                                )}
                            </ul>
                        </div>)
                        : null}
                       </div>
            </section>
        </div>
    );
}

export default Dashboard;