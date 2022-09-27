import React from "react";
import EditDaycareInfomation from "./EditDaycareInfomation";
import { BrowserRouter,Link,Route } from 'react-router-dom';
import Logout from "./Logout";
import { RegisteredSeeker } from "./RegisteredSeeker";
import ViewDaycareForDaycares from "./ViewDaycareForDaycares";
import EditProfileDaycareOwner from "./EditProfileDaycareOwner";


export default class DaycareHome1 extends React.Component{
    render(){
        var obj=JSON.parse(localStorage.getItem("loggeduser"))
                     

        return(
            <BrowserRouter>
            <div className="container-fluid" id="admindashboard">
               <div className="vertical-menu">
                <nav>
                <Link to="/editinformation">Edit Information</Link>
                <Link to="/viewinformation">View Information</Link>
                <Link to="/registeredseeker">Registered Seekers</Link>
                <Link to="/editprofile">Edit Profile</Link>
                <Link to="/logout">Logout</Link>
                </nav>
                </div>
                </div>
                <div className="dashboardcontent">
                <Route path="/editinformation" component={EditDaycareInfomation} />
                <Route path="/viewinformation" component={ViewDaycareForDaycares} />
                <Route path="/registeredseeker" component={RegisteredSeeker} />
                <Route path="/editprofile" component={EditProfileDaycareOwner} />
                <Route path="/logout" component={Logout} />
                </div>
                </BrowserRouter>
        )
      }
    }