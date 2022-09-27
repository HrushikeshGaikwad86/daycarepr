import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route,Link, BrowserRouter } from 'react-router-dom'
import LoginMain from './LoginMain'
import mystore from './store'
import Home from './Home'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import SeekerHome from './SeekerHome'
import DaycareHome from './DaycareHome'
import AdminDashboard from './AdminDashboard'
import BookDaycares from './BookDaycare'
import ResetPassword from './ResetPassword'



export default class MainPage extends Component {
      constructor(props)
      {
          super(props)
          this.state={
              flag:false
          }
      }

      render() {
                mystore.subscribe(()=>{this.setState({flag: mystore.getState().loggedin})})
            return (
                
                <BrowserRouter>
                <div style={{display: this.state.flag?'none':'block'}}>
                <nav class="navbar navbar-expand-lg orangecolor mainpage-nav-bg">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/home" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/contactus" class="nav-link">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/aboutus" class="nav-link">About Us</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/login" class="nav-link">Login</Link>
                        </li>
                        {/* <li class="nav-item">
                        <Link to="/admindashboard" class="nav-link">AdminDashboard</Link>
                        </li> */}
                    </ul>
                </div>
                </nav>
                <Home/>
                <div>
                    <Route path="/login" component={LoginMain} />
                    <Route path="/home" component={Home} />
                    <Route path="/contactus" component={ContactUs} />
                    <Route path="/aboutus" component={AboutUs} />
                   {/* <Route path="/admindashboard" component={AdminDashboard}/>  */}
                </div>
                </div>
                <Route path="/admindashboard" component={AdminDashboard}/>
                <Route path="/daycarehome" component={DaycareHome}/>
                <Route path="/seekerhome" component={SeekerHome}/>
                <Route path="/bookdaycare" component={BookDaycares}/>
                <Route path="/resetpassword" component={ResetPassword}/>
                </BrowserRouter>
               
            )
      }
}