import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Link, Route } from 'react-router-dom';
import DaycareRegForm from './Project/DaycareRegForm'
import './LoginMain.css'
import LoginMain from './Project/LoginMain';
import SeekerRegistration from './Project/SeekerRegistration';
import DaycareHome from './Project/DaycareHome';
import SeekerHome from './Project/SeekerHome';
import RegistrationOption from './Project/RegestrationOption';
import AdminDashboard from './Project/AdminDashboard';
import { SeekersApproval } from './Project/SeekersApproval';
import { DaycareApproval } from './Project/DaycareApproval';
import { RegisteredDaycare } from './Project/RegisteredDaycare';
import { RegisteredSeeker } from './Project/RegisteredSeeker';

import Home from './Project/Home';
import MainPage from './Project/MainPage';
import Logout from './Project/Logout';
import EditProfileSeeker from './Project/EditProfileSeeker';
import BookDaycares from './Project/BookDaycare';
import { BookedSeekers } from './Project/BookedSeekers';
import DaycareInformation from './Project/DaycareInformation';
import { ShowBookingsAdmin } from './Project/ShowBookingsAdmin';
import EditProfileDaycareOwner from './Project/EditProfileDaycareOwner';
import ResetPassword from './Project/ResetPassword';





function App() {
  let name=["Akash","Jaydeep","Gani"];
  return (
        <div>
           {/*<BrowserRouter>
           <ul className="nav nav -tabs">
             <li className="nav-item"><Link className="nav-link" to="/reg">Regestration</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/val">Validation</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/rest">RestApiForm</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/para">ParaColor</Link></li>
           </ul>
           <switch>
             <Route path="/reg" component={RegForm}/>
             <Route path="/val" component={ValidationForm}/>
             <Route path="/para" component={ParaColor}/>
             <Route path="/rest" component={RestApiPosr}/>
           </switch>
           </BrowserRouter>
           <DummyApi></DummyApi>*/}
           {/*<LoginMain></LoginMain>
           <SeekerRegistration></SeekerRegistration>
           <DaycareRegForm></DaycareRegForm>
           <RegisteredSeeker></RegisteredSeeker>
           <SeekersApproval></SeekersApproval>
           <RegisteredDaycare></RegisteredDaycare>
           <DaycareApproval></DaycareApproval>
           <AdminDashboard></AdminDashboard>*/}
          <BrowserRouter>
          <div>
            <Route path="/" component={MainPage} exact/>
            <Route exact path="/login" component={LoginMain} />
            <Route path="/home" component={Home} />
            <Route path="/daycareregiser" component={DaycareRegForm}/>
            <Route path="/seekerregiser" component={SeekerRegistration}/>
            <Route path="/daycarehome" component={DaycareHome}/>
            <Route path="/seekerhome" component={SeekerHome}/>
            <Route path="/bookdaycare" component={BookDaycares}/>
            <Route path="/editprofileseeker" component={EditProfileSeeker}/>
            <Route path="/selectreg" component={RegistrationOption}/>
            <Route path="/admindashboard" component={AdminDashboard}/>
            <Route path="/seekerapproval" component={SeekersApproval} />
            <Route path="/daycareapproval" component={DaycareApproval} />
            <Route path="/registeredseeker" component={RegisteredSeeker} />
            <Route path="/registereddaycare" component={RegisteredDaycare} />
            <Route path="/bookedseekers" component={BookedSeekers} />
            <Route path="/daycareeditinformation" component={BookedSeekers} />
            <Route path="/daycareinformation" component={DaycareInformation} />
            <Route path="/getbookedseekersinfoforadmin" component={ShowBookingsAdmin} />
            <Route path="/editprofile" component={EditProfileDaycareOwner} />
            <Route path="/logout" component={Logout} />
            <Route path="/resetpassword" component={ResetPassword} />
          </div>
          </BrowserRouter>
        </div>);





          /*(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
