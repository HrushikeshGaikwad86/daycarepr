import React from 'react'
import BookDaycares from './BookDaycare';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class SeekerHome extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            msg:"",
            dtype:"",
            daycares: [],
            areas: [],
            area:""
        }
        this.getarea=this.getarea.bind(this);
        this.gettype=this.gettype.bind(this);
    }

      componentDidMount = () =>{
        
        
        fetch("http://localhost:8080/getarea")
        
        .then(resp => resp.json())
        .then(data => {this.setState({areas: data});
                       });
    }
    getarea=(e)=>{
        
        this.setState({ area: e.target.value }, () => {                              
          //callback
          console.log(this.state.area) // myname
        });
       
    }
    gettype=(e)=>{
      
      this.setState({dtype: e.target.value})
     
    }
    getDaycares=()=>{
      
      const url="http://localhost:8080/getdaycaresbyareatype?area="+this.state.area+"&daycare_type="+this.state.dtype;
     
      fetch(url)
      .then(resp => resp.json())
      .then(data => {this.setState({daycares: data});
                      });
      }
  

      render() {
        console.log(this.state.area)
        var obj=JSON.parse(localStorage.getItem("loggeduser"))
            return (
              <div>
              <div class="container-fluid " id="seeker-home">

                <div class="row " id="welcomeseeker">
                  <div class="col">
                    <h1 >Welcome {obj.first_name}</h1>
                  </div>
                </div>

                <div class="row" id="seeker-navbar">        
                  <div class="col-md-3">
                    <label id="selectarea" for="area">Select Area :</label>&nbsp;
                    <select name="area" id="area" required="true" onChange={(e)=>this.getarea(e)}>
                      <option value="select">select</option>
                        {
                        this.state.areas.map(
                            obj=>{
                                return(
                                    <option value={obj}>{obj} </option>
                                )
                            }
                          ) 
                        }  
                                            
                    </select> 
                     
                </div>

                <div class="col-md-3">
                    <label id="daycaretype" for="dtype">Daycare Type :</label>&nbsp;
                    <select name="dtype" id="dtype" required="true" onChange={(e)=>this.gettype(e)}>
                      <option value="select">select</option>
                      <option value="child">Children</option>
                      <option value="senior">Senior</option>
                      <option value="both">Both</option>                        
                    </select> 
                    
                </div>

                    <div class="col-md-2">
                        <input type="submit" value="Show" className="seeker-submit-btn" onClick={()=>this.getDaycares()}/>
                    </div> 
                    <div class="col-md-2" >
                      <a id="prof" href="/editprofileseeker">Profile</a>
                    </div>
                    <div class="col-md-2" >
                      <a id="prof" href="/">Logout</a>
                    </div>
                 </div>    
                  <div>
                
                
                    {
                        this.state.daycares.map(
                            obj=>{ const i=obj.daycare_id;const p=obj.price;

                              localStorage.setItem("selectedDaycare" ,JSON.stringify(this.state.daycares));
                                return(
                                  <div className="container form-reg justify-content-center p-5 mt-3 mb-5 font-size-form">
                                  <form onSubmit={this.submitReq} >
                                      <div class="row m-3">
                                          <div class="col-md">
                                              <label for="daycare_name"> Daycare Name : {obj.daycare_name}</label>
                                          </div>
                                          <div class="col-md">
                                              <label for="address">  Address : {obj.address}</label>
                                              
                                          </div>
                                      </div>
                                      <div class="row m-3">
                                          <div class="col-md">
                                              <label for="area"> Area : {obj.area}</label>         
                                          </div>
                                          <div class="col-md">
                                              <label for="pincode"> Pincode : {obj.pincode}</label>       
                                          </div>
                                      </div>
                                      <div class="row m-3">
                                          <div class="col-md">
                                              <label for="contact_no">  Contact Number : {obj.contact_no}</label>
                                          </div>
                                          <div class="col-md">
                                              <label for="license_no">  License No : {obj.license_no}</label>
                                          </div>
                                      </div>
                                      <div class="row m-3">
                                          <div class="col-md">
                                              <label for="email_id">  Email-ID : {obj.login.email_id}</label>
                                          </div>
                                          <div class="col-md">
                                              <label for="email_id">  Daycare Type : {obj.daycare_type}</label>
                                          </div>
                                      </div>
                                      <div class="row m-3">
                                          <div class="col-md">
                                              <label for="ow_first_name">  Owner First Name : {obj.ow_first_name}</label>   
                                          </div>
                                          <div class="col-md">
                                              <label for="ow_last_name">  Owner Last Name : {obj.ow_last_name}</label>
                                          </div>
                                      </div>
                                      
                                      <div class="row m-3">
                                          <div class="col-md">
                                              <label for="ow_contact_no"> Owner Contact No : {obj.ow_contact_no}</label>            
                                          </div>
                                          <div class="col-md">
                                              <label for="timing"> Timing : {obj.timing}</label>    
                                          </div>
                                          
                                      </div>
                                      <div class="row m-3">
                                          <div class="col-md">
                                              <label for="capacity"> Capacity : {obj.capacity}</label>  
                                          </div>
                                          <div class="col-md">
                                              <label for="price"> Price : {obj.price}</label>
                                          </div>
                                      </div>
                                  
                                      <div class="row m-3">
                                          <div class="col-md-3 "></div>
                                          <div class="col-md-3 ">
                                              <input type="submit" name="book" id="book" className="float-right submit-reg" value="Book Here" onClick={() => this.props.history.push({pathname : '/bookdaycare',state :{ daycare_id :i,price :obj.price,vacancy :obj.capacity}})}></input>
                                          </div>   
                                          <div class="col-md-3 ">
        
                                          </div> 
                                          <div class="col-md-4 "></div>
                                      </div> 
                                      
                                  </form>
                              </div>
                                   
                                )
                            }
                        )
                    }
               
                
            </div>                  
              </div>
              <Route path="/bookdaycare" component={BookDaycares}/>
              </div>
                                 
            )
      }
}
