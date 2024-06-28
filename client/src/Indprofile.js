import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Indprofile = ({ match }) => {
    const [rating, setRating] = useState(null);
    const [taskprovider, setTaskprovider] = useState(null);

    const submitHandler = e => {
        axios.get('http://localhost:5000/myprofile', {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        }).then(res => setTaskprovider(res.data.fullname))
        let review = {
            taskprovider,
            taskworker: match.params.id,
            rating
        }
        axios.post('http://localhost:5000/addreview', review, {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        }).then(res => alert(res.data))
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
                        <Link to="/login">Logout</Link>
                    </li>
                </ul>
            </nav>
            <section class="container">
                <div class="btnlight6"><button class="btnlight4"><Link to="/myprofile">Back To Profiles</Link></button></div>
                <div class="profile1">
                    <div class="profile2">
                        <img class="round-img3" src="https://www.gravatar.com/avatar" alt="" />
                        <div><h1 class="large">{match.params.fullname}</h1>
                            <p class="lead4">{match.params.email}</p>
                            <p class="lead5">India</p></div>
                    </div>
                    <div class="profile-github">
                        <h2 class="text10">
                            <i className="fab fa-github"></i> Reviews and Ratings
                        </h2>
                    </div>
                    <div class="repo">
                        <div>
                            <h4>
                                <Link to="#">John</Link>
                            </h4>
                            <p class="lead6">4/5</p>
                        </div>
                    </div>
                    <div class="repo1">
                        <div>
                            <h4>Enter your reviews</h4>
                            <form class="form" autoComplete="off" onSubmit={submitHandler}>
                                <div class="form-group">
                                    <input type="text" placeholder="Enter your rating out of 5" name="rating"
                                        onChange={e => setRating(e.target.value)}
                                        required />
                                </div>
                                <input type="submit" class="btn btn-primary" value="Add Rating" />
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Indprofile;