import React from 'react';
export default class EditProfileSeeker extends React.Component{
    constructor(props){
        var obj=JSON.parse(localStorage.getItem("loggeduser"))
        super(props)
        this.state={
            seeker_id:obj.seeker_id,
            first_name:obj.first_name,
            last_name:obj.last_name,
            email_id:obj.login.email_id,
            answer:obj.answer,
            password:"",
            confirm_password:"",
            contact_no:obj.contact_no,
            address:obj.address,
            st: {},
            success:false,

            errors:{
                first_name_error:"",
                last_name_error:"",
                email_id_error:"",
                password_error:"",
                confirm_password_error:"",
                contact_no_error:"",
                answer_error:""
            },

                first_name_valid:false,
                last_name_valid:false,
                email_id_valid:false,
                password_valid:false,
                confirm_password_valid:false,
                contact_no_valid:false,
                answer_valid:false,
                formvalid:false
        }
    }

        handleChange=(e)=>{
            const password_regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[A-Za-z0-9!@#$%^&*]{5,}$/
            const first_name_regex=/^[A-Z]{1}[a-z]{2,}$/;
            const last_name_regex=/^[A-Z]{1}[a-z]{2,}$/;
            //const contact_no_regex=/^\+91\-[0-9]{10}$/
            const contact_no_regex=/(0|91)?[7-9][0-9]{9}/;
           const email_regex=/^[A-Za-z0-9.]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,5}$/;
          // const email_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            let nm = e.target.name;
            let val = e.target.value;
            let errors=this.state.errors;

            let first_name_flag=this.state.first_name_valid;
            let last_name_flag=this.state.last_name_valid;
            let email_id_flag= this.state.email_id_valid;
            let password_flag=this.state.password_valid;
            let confirm_password_flag=this.state.confirm_password_valid;
            let contact_no_flag=this.state.contact_no_valid;
            let answer_flag=this.state.answer_valid;

            switch(nm)
            {
                case 'first_name':
                      if(!first_name_regex.test(val)){  
                        errors.first_name_error="First letter should be capital"
                        first_name_flag=false;
                    }
                    else{
                        errors.first_name_error="";
                        first_name_flag=true;
                    }
                break;

                case 'last_name':
                      if(!last_name_regex.test(val)){  
                        errors.last_name_error="First letter should be capital"
                        last_name_flag=false;
                    }
                    else{
                        errors.last_name_error="";
                        last_name_flag=true;
                    }
                break;

                case 'email_id':
                      if(!email_regex.test(val)){  
                        errors.email_id_error="Invalide email"
                        email_id_flag=false;
                    }
                    else{
                        errors.email_id_error="";
                        email_id_flag=true;
                    }
                break;

                case 'password':
                    if(!password_regex.test(val)){ 
                        errors.password_error="Needs atleast one capital letter,small letter,number and special character";
                        password_flag=false;
                    }
                    else{
                        errors.password_error="";
                        password_flag=true;
                    }
                break;
                
                case 'confirm_password':
                    if(!(this.state.password==val)){ 
                        errors.confirm_password_error="Password does not match";
                        confirm_password_flag=false;
                    }
                    else{
                        errors.confirm_password_error="";
                        confirm_password_flag=true;
                    }
                break;

                case 'contact_no':
                if(!contact_no_regex.test(val)){ 
                    errors.contact_no_error="Invalid Contact";
                    contact_no_flag=false;
                }
                else{
                    errors.contact_no_error="";
                    contact_no_flag=true;
                }
                break;
                case 'answer':
                if(!last_name_regex.test(val)){ 
                    errors.answer_error="First letter should be capital";
                    answer_flag=false;
                }
                else{
                    errors.answer_error="";
                    answer_flag=true;
                }
                break;
            }

            
        this.setState({errors,[nm]:val,first_name_valid:first_name_flag,
            last_name_valid:last_name_flag,
            email_id_valid:email_id_flag,
            password_valid:password_flag,
            confirm_password_valid:confirm_password_flag,
            contact_no_valid:contact_no_flag

        },()=>{ this.setState({formvalid:this.state.first_name_valid && this.state.last_name_valid && this.state.email_id_valid && this.state.contact_no_valid &&this.state.answer_valid})})
            //this.setState({[e.target.name] : e.target.value});
        }

        submitReq = (e) =>{
            var obj=JSON.parse(localStorage.getItem("loggeduser"))
            e.preventDefault();

            const reqData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    seeker_id:this.state.seeker_id,
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email_id: this.state.email_id,
                    answer: this.state.answer,
                    password:obj.password,
                    contact_no: this.state.contact_no,
                    address: this.state.address
                })
            };


            console.log(reqData.body);
            fetch("http://localhost:8080/editseekerprofile",reqData)
            .then(resp =>
                {
                    if(resp.status == 200)
                    {
                        alert("Edit Successfully");
                        this.props.history.push("/seekerhome");
                    }
                    else
                    {
                        alert("Edit Failed");
        
                    }
                })
            .then(data => this.setState({st: data, success: true}));
            
        }

        render()
        {
            return(
                <div className="container justify-content-center p-5 mt-5 mb-5 form-reg font-size-form" >
                    <form className="" onSubmit={this.submitReq} >
                        <div className="text-center orangecolor"><h2>Edit Profile</h2></div>
                        <div class="row m-3">
                            <div class="col-md">
                                <label for="first_name"> First Name : </label>
                                <input  type="text" name="first_name" id="first_name" value={this.state.first_name} className=" input-group form-control" required="true" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.errors.first_name_error}</span>
                            </div>
                            <div class="col-md">
                                <label for="last_name">  Last Name : </label>
                                <input type="text" name="last_name" id="last_name" value={this.state.last_name} className=" input-group form-control" required="true" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.errors.last_name_error}</span>
                            </div>
                        </div>
                        <div class="row m-3">
                            <div class="col-md">
                                <label for="email_id"> Email Id : </label>
                                <input type="email_id" name="email_id" id="email_id" value={this.state.email_id} class=" form-control" required="true" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.errors.email_id_error}</span>
                            </div>
                            <div class="col-md">
                                <label for="answer"> Your favourite sport ? </label>
                                <input type="text" name="answer" id="answer" class="form-control" value={this.state.answer} required="true" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.errors.answer_error}</span>
                           </div>
                        </div>
                        <div class="row m-3">
                            <div class="col-md">
                                <label for="contact_no"> Contact Number : </label>
                                <input type="text" name="contact_no" id="contact_no" class="form-control" value={this.state.contact_no} required="true" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.errors.contact_no_error}</span>
                            </div>
                            <div class="col-md">
                                <label for="address"> Address : </label>
                                <input type="text" name="address" id="address" class="form-control" value={this.state.address}  required="true" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class="row m-3">
                        <div class="col-md-3 "></div>
                        <div class="col-md-3 ">
                            <input type="submit" name="submitdata" id="submitdata"  className="float-right submit-reg" value="Submit"></input>
                            
                        </div>
                        <div class="col-md-3 ">
                            <input type="reset" name="resetdata" id="resetdata" className=" submit-reg" value="Reset"></input>
                        </div>    
                        <div class="col-md-4 "></div>
                    </div>
                    </form>
                    </div>
                    );
                }
    }

