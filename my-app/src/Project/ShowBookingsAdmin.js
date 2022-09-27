import React from "react";

export class ShowBookingsAdmin extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            date:"",
            seekers: [],
            errors:{
                date_error:""
            },
            date_valid:false,
            formvalid:false
        }
        this.handleChange=this.handleChange.bind(this);

    }

    handleChange=(e)=>{
        let nm = e.target.name;
        let val = e.target.value;
        let errors=this.state.errors;
        let date_flag=this.state.date_valid;
        
        switch(nm)
        {     
            case 'date':
                
                
                if(val==""){ 
                    errors.date_error="Invalid Date";
                    date_flag=false;
                }
                else{
                    errors.date_error="";
                    date_flag=true;
                }
            break;
        }  
        this.setState({errors,[nm]:val,
            date_valid:date_flag
        },()=>{ this.setState({formvalid: this.state.date_valid })})
        //this.setState({[e.target.name] : e.target.value});     
    }

    submitReq = (e)=>{
        e.preventDefault();
        
        

        var obj=JSON.parse(localStorage.getItem("loggeduser"))
       
        const url="http://localhost:8080/getbookedseekersinfoforadmin?date="+e.target.date.value;
       
        fetch(url)
        .then(resp => resp.json())
        .then(data => {this.setState({seekers: data});
                       
                    if(this.state.seekers.length==0){
                        alert("No Bookings")
                        this.props.history.push("/admindashboard");
                    }});

        };

    render(){

        return (
            <div >
                <h2> Booked Seekers</h2>
                <form className="" onSubmit={this.submitReq} >
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-3">
                        <input type="date" name="date" required="true" onChange={this.handleChange}/>
                        <span className="text-danger">{this.state.errors.date_error}</span>
                    </div>
                    <div class="col-md-3">
                    <input type="submit" value="SHOW" className="p-1 bgorangecolor"  name="show" id="show" />
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                </form>

                <table className="table table-bordered mt-5">
                    
                    <tr>
                        <th>Guardian Name</th>
                        <th>Guardian Contact</th>
                        <th>Daycare Name </th>
                        <th>Daycare Contact No</th>
                        <th>Candidate Name</th>
                        <th>Admin Amount Received</th>
                        <th>Daycare Amount Received</th>
                        
                    </tr>
                    {
                        this.state.seekers.map(
                            obj=>{ 
                                return(
                                    <tr>
                                        <td>{obj.seeker.first_name}</td>
                                        <td>{obj.seeker.contact_no}</td>
                                        <td>{obj.daycare.daycare_name}</td>
                                        <td>{obj.daycare.contact_no}</td> 
                                        <td>{obj.candidate_first_name}</td>
                                        <td>{obj.admin_amount}</td>
                                        <td>{obj.daycare_amount}</td>
                                         
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