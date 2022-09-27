import React from "react";
import EditDaycareInfomation from "./EditDaycareInfomation";
import EditProfileDaycareOwner from "./EditProfileDaycareOwner";
import { Route,Link, BrowserRouter } from 'react-router-dom'
import { RegisteredSeeker } from "./RegisteredSeeker";
import mystore from "./store";
import ViewDaycareForDaycares from "./ViewDaycareForDaycares";
import { BookedSeekers } from "./BookedSeekers";



export default class DaycareHome extends React.Component{

    logout=()=>{
        mystore.dispatch({type: 'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        this.props.history.push("/");
    }
    render(){
        var obj=JSON.parse(localStorage.getItem("loggeduser"))

        return(
        <div>
        <h1 className="dashboardcontent orangecolor">Welcome { obj.ow_first_name} </h1>
        <BrowserRouter>
        <div className="container-fluid" id="admindashboard">
        <div className="vertical-menu">
        <nav>
        <Link to="/editinformation">Edit Information</Link>
        <Link to="/viewinformation">View Information</Link>
        <Link to="/bookedseekers">Booked Seekers</Link>
        <Link to="/editprofile">Edit Profile</Link>
        <Link to="#" onClick={this.logout}>Logout</Link>
        </nav>
        </div>
        </div>
        <div className="dashboardcontent">
        <Route path="/editinformation" component={EditDaycareInfomation} />
        <Route path="/viewinformation" component={ViewDaycareForDaycares} />
        <Route path="/bookedseekers" component={BookedSeekers} />
        <Route path="/editprofile" component={EditProfileDaycareOwner} />
        </div>
        </BrowserRouter>
        </div>
        )
      }
    }
