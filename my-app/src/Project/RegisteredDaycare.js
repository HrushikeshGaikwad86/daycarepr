import React from "react";

export class RegisteredDaycare extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            msg:"",
            seekers: []
        }
    }

    componentDidMount = () =>{
       
        
        fetch("http://localhost:8080/getvaliddaycare")
        
        .then(resp => resp.json())
        .then(data => {this.setState({seekers: data});
                       });
    }

    submitReq(e){
       
        const url="http://localhost:8080/invalidatedaycare?login_id="+e;
        
        fetch(url)
        .then(response => response.text())
        .then(data => this.setState({msg:data}))
        
        };

    render(){

        return (
            <div>
                <h2> Registered Seekers </h2>
                <table className="table table-bordered ">
                    <tr>
                        <th>Daycare Name</th>
                        <th>Address </th>
                        <th>Area</th>
                        <th>Daycare Contact No</th>
                        <th>License No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Aadhar No</th>
                        <th>Contact No</th>
                        <th>Daycare Type</th>
                        <th>Capacity</th>
                        <th>Price</th>
                        <th>Timing</th>
                        <th>Status</th>
                    </tr>
                    {
                        this.state.seekers.map(
                            obj=>{ const i=obj.login.login_id
                               
                                return(
                                    <tr>
                                        <td>{obj.daycare_name}</td>
                                        <td>{obj.address}</td>
                                        <td>{obj.area}</td>
                                        <td>{obj.contact_no}</td>
                                        <td>{obj.license_no}</td>
                                        <td>{obj.ow_first_name}</td>
                                        <td>{obj.ow_last_name}</td>
                                        <td>{obj.aadhar_no}</td>
                                        <td>{obj.ow_contact_no}</td>
                                        <td>{obj.daycare_type}</td>
                                        <td>{obj.capacity}</td>
                                        <td>{obj.price}</td>
                                        <td>{obj.timing}</td>
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