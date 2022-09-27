import React from 'react';
export default class SeekerRegistration extends React.Component{
    constructor(props){
        var obj=JSON.parse(localStorage.getItem("resetpass"))
        super(props)
        this.state={
            email_id:obj.email_id,
            password:"",
            confirm_password:"",
            st: {},
            success:false,

            errors:{
                password_error:"",
                confirm_password_error:"",
            },

                password_valid:false,
                confirm_password_valid:false,
                
        }
    }

        handleChange=(e)=>{
            const password_regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[A-Za-z0-9!@#$%^&*]{5,}$/
            let nm = e.target.name;
            let val = e.target.value;
            let errors=this.state.errors;

            let password_flag=this.state.password_valid;
            let confirm_password_flag=this.state.confirm_password_valid;
            
            switch(nm)
            {
      
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

            }

            
        this.setState({errors,[nm]:val,
            password_valid:password_flag,
            confirm_password_valid:confirm_password_flag

        },()=>{ this.setState({formvalid:this.state.password_valid && this.state.confirm_password_valid})})
            //this.setState({[e.target.name] : e.target.value});
        }

        submitReq = (e) =>{
            e.preventDefault();

            const reqData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    email_id: this.state.email_id,
                    password:this.state.password  
                })
            };


            console.log(reqData.body);
            fetch("http://localhost:8080/resetpasswordby",reqData)
            .then(resp =>
                {
                    if(resp.status == 200)
                    {
                        alert("Reset Successfully");
                        this.props.history.push("/");
                    }
                    else
                    {
                        alert("Failed to reset");
                        this.props.history.push("/");
        
                    }
                })
            .then(data => this.setState({st: data, success: true}));
            
        }

        render()
        {
            return(
                <div className="container justify-content-center p-5 mt-5 mb-5 form-reg font-size-form" >
                    <form className="" onSubmit={this.submitReq} >
                        <div className="text-center orangecolor"><h1>Reset Password</h1></div>
                        
                        
                        <div class="row m-3">
                            <div class="col-md">
                            <label for="password"> Password: </label>
                                <input type="password" name="password" id="password" class="form-control" required="true" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.errors.password_error}</span>
                             </div>
                            <div class="col-md">
                                <label for="confirm_password"> Confirm Password : </label>
                                <input type="password" name="confirm_password" id="confirm_password" class="form-control" required="true" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.errors.confirm_password_error}</span>
                            </div>
                        </div>
                        <div class="row m-3">
                        <div class="col-md-3 "></div>
                        <div class="col-md-3 ">
                            <input type="submit" name="submitdata" id="submitdata" disabled={!this.state.formvalid} className="float-right submit-reg" value="Submit"></input>
                            
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

