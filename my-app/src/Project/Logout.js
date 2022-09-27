import React from 'react'

export default class Logout extends React.Component {
      constructor(props){
            super(props)
      }
      

      render() {
            function logoutuser() {
               localStorage.clear();
               this.props.history.push('/login');   
            }
            return (

<div className="login-wrapper" >
     
<form action="" className="form" >
     <h4 className="orangecolor">Do you want to LOGOUT ?</h4>
        <span >
            <input type="submit" value="Yes" className="submit-reg"  id="logoutyes"  onClick={logoutuser}/>
        </span>
        <span >
            <input type="submit" value="No" className="submit-reg float-right"  id="logoutno" onClick={() => this.props.history.push('/daycarehome')}/>
        </span>
 </form>
</div>
                
            )
      }
}