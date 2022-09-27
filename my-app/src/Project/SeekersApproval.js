import React from "react";

export class SeekersApproval extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            msg:"",
            seekers: []
        }
    }

    componentDidMount = () =>{
       
        
        fetch("http://localhost:8080/getinvalidseeker")
        
        .then(resp => resp.json())
        .then(data => {this.setState({seekers: data});
                       });
    }

    submitReq(e){
        
        const url="http://localhost:8080/validateseeker?login_id="+e;
        
        fetch(url)
        .then(response => response.text())
        .then(data => this.setState({msg:data}))
         alert("Approved")
        };

    render(){

        return (
            <div class="common-bg-color">
                <div class="table_padding">
                <h2> Seeker Approval</h2>
                <table  className="table table-bordered">
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
                                        <td><input type="submit" value="Approve" className="submit-reg bgorangecolor"  name="valid" id="valid" onClick={()=>this.submitReq(i)} /></td>
                                      
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
                </div>
            </div>
        )
    }

}