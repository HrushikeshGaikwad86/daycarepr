import React from 'react'
export default class ContactUs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="login-wrapper" id="light-bg">
                        <form action="" className="form">
                      <h2>Contact Us</h2>
                    
                       <p><b><i> name :</i></b> Online Daycare Services management</p>

                       <p><b><i> Email :</i></b> daycareservices@gmail.com</p>

                       <p><b><i> Mobile no :</i></b> 9900990099</p>

                       <p><b><i> Address :</i></b> Office no.18,cyber tower,sinhgad road,411041,pune</p>

                    </form>
                  </div>
            </div>
        )
    }
}