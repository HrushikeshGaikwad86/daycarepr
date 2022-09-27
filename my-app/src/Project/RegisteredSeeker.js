import React from "react";

export class RegisteredSeeker extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            msg:"",
            seekers: []
        }
    }

    componentDidMount = () =>{
        
        
        fetch("http://localhost:8080/getvalidseeker")
        
        .then(resp => resp.json())
        .then(data => {this.setState({seekers: data});
                       });
    }

    submitReq(e){
        
        const url="http://localhost:8080/invalidateseeker?login_id="+e;
        
        fetch(url)
        .then(response => response.text())
        .then(data => this.setState({msg:data}))
        
        };

    render(){

        return (
            <div className="table-responsive common-bg-color">
                <h2> Registered Daycares </h2>
                <table className="table table-bordered ">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email-ID</th>
                        <th>Contact No</th>
                        <th>Address</th>
                        <th>Status</th>
                        
                    </tr>
                    {
                        this.state.seekers.map(
                            obj=>{ const i=obj.login.login_id
                                
                                return(
                                    <tr>
                                        <td>{obj.first_name}</td>
                                        <td>{obj.last_name}</td>
                                        <td>{obj.login.email_id}</td>
                                        <td>{obj.contact_no}</td>
                                        <td>{obj.address}</td>
                                        <td><input type="submit" value="Invalid" className="submit-reg bgorangecolor"  name="valid" id="valid" onClick={()=>this.submitReq(i)} /></td>
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
                
            </div>
        )
    }

}