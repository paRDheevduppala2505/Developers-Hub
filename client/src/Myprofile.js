import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const Myprofile = () => {
    const [data, setData] = useState(null);
    const [review, setReview] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/myprofile', {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        }).then(res => setData(res.data))
        axios.get('http://localhost:5000/myreview', {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        }).then(res => setReview(res.data))
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
                <Link to="/login">Logout</Link>
            </li>
        </ul>
    </nav>
    {data && 
    <section class="container">
    <div class="btnlight6"><button class="btnlight4"><Link to="/dashboard">Back To Profiles</Link></button></div> 
      <div class="profile1">
          <div class="profile2">
              <img class="round-img3" src="https://www.gravatar.com/avatar" alt="" />
              <div><h1 class="large">{data.fullname}</h1>
              <p class="lead4">{data.email}</p>
              <p class="lead5">India</p></div>
          </div>
          <div class="profile-github">
              <h2 class="text10">
                  <i className="fab fa-github"></i> Reviews and Ratings
              </h2>
          </div>
          <div class="repo">
            {review ? 
            review.map(review => 
                <div>
                  <h4>
                      <Link to="#">{review.taskprovider}</Link>
                  </h4>
                  <p class="lead6">{review.rating}/5</p>
              </div>
             )
             :<p>No reviews added yet</p>
            }
              
          </div>
          <div class="repo1">
              <div>
                  <h4>Enter your reviews</h4>
                  <form class="form" autoComplete="off">
                      <div class="form-group">
                          <input type="text" placeholder="Enter your rating out of 5" name="rating" required />
                      </div>
                      <input type="submit" class="btn btn-primary" value="Add Rating" />
                  </form>

              </div>
          </div>
      </div>
  </section>
    }
    
        </div>
    );
}
 
export default Myprofile;