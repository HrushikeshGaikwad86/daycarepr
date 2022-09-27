import React from "react";


export default class RegistrationOption extends React.Component{

      render(){

        return(
            
            <div className="login-wrapper" >
     
            <form action="" className="form" onSubmit={this.submitReq} >
                 <h2>Register for</h2>
                    <span >
                        <input type="submit" value="Seeker" className="submit-reg"  id="seeker"  onClick={() => this.props.history.push('/seekerregiser')}/>
                    </span>
                    <span >
                        <input type="submit" value="Daycare" className="submit-reg float-right"  id="daycare" onClick={() => this.props.history.push('/daycareregiser')}/>
                    </span>
             </form>
         </div>
        )
      }
    }