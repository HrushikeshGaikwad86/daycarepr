import React from "react";
import { BrowserRouter,Link,Route } from 'react-router-dom';
import { DaycareApproval } from "./DaycareApproval";
import DaycareInformation from "./DaycareInformation";
import { RegisteredDaycare } from "./RegisteredDaycare";
import { RegisteredSeeker } from "./RegisteredSeeker";
import { SeekersApproval } from "./SeekersApproval";
import { ShowBookingsAdmin } from "./ShowBookingsAdmin";
import mystore from "./store";





export default class AdminDashboard extends React.Component{
  logout=()=>{
    mystore.dispatch({type: 'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/");
}
    render(){
      var obj=JSON.parse(localStorage.getItem("loggeduser"))

        return(
            <div>
            <BrowserRouter>
            <div className="container-fluid" id="admindashboard">
               <div className="vertical-menu">
               
                <nav>
                <Link to="/seekerapproval">Seekers Approval</Link>
                <Link to="/daycareapproval">Daycare Approval</Link>
                <Link to="/registeredseeker">Registered Seekers</Link>
                <Link to="/registereddaycare">Registered Daycares</Link>
                <Link to="/getbookedseekersinfoforadmin">Show Bookings</Link>
                <Link to="#" onClick={this.logout} >Logout</Link>
                </nav>
                </div>
                </div>
                <div className="dashboardcontent">
                <Route path="/seekerapproval" component={SeekersApproval} />
                <Route path="/daycareapproval" component={DaycareApproval} />
                <Route path="/registeredseeker" component={RegisteredSeeker} />
                <Route path="/registereddaycare" component={RegisteredDaycare} />
                <Route path="/getbookedseekersinfoforadmin" component={ShowBookingsAdmin} />
                </div>
                </BrowserRouter>
                </div>
        )
      }
    }