import React from "react";
import prof from '../images/profile.jpg';
import mystore from "./store";

export default class LoginMain extends React.Component{

  constructor(props)
  {
    super(props)
    this.state={

      email_id:"",
      password:"",
      daycare:"",
      seeker:"",
      admin:"",
      login:"",
      answer:"",
      loginerror:"",
      loginerror1:"",
      st: {},
      success:false,
      errors:{
        email_id_error:"",
        answer_error:"",
        password_error:""
          
      },
      answer_valid:false,
      email_id_valid:false,
      password_valid:false,
      formvalid:false,
      formvalid1:false,
    
    }
  }

     handleChange= (e) =>{

      const loginUser_regex=/^[A-Za-z0-9.]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,5}$/;
      const password_regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[A-Za-z0-9!@#$%^&*]{5,}$/

      let nm = e.target.name;
      let val = e.target.value;
      console.log(val);

      let errors=this.state.errors;
      let email_id_flag=this.state.email_id_valid;
      let password_flag=this.state.password_valid;


      switch (nm)
      {
        case 'email_id':
                 if(!loginUser_regex.test(val))
                 {
                   errors.email_id_error="Invalid User"
                   email_id_flag=false;
                 }
                 else{
                   errors.email_id_error="";
                   email_id_flag=true;
                 }
                 break;

        case 'password':
                  if(!password_regex.test(val))
                  {
                    errors.password_error="Invalid Password"
                    password_flag=false;
                  }
                  else{
                    errors.password_error="";
                    password_flag=true;
                  }
                  break;        
       }

       this.setState({errors,[nm]:val,email_id_valid:email_id_flag,password_valid:password_flag }, ()=> {
          this.setState ({
             formvalid : this.state.email_id_valid && this.state.password_valid
            })
         })
     }

     submitReq=(e)=>{
      e.preventDefault();
      const reqData = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email_id: this.state.email_id,
            password: this.state.password
          })
      };
      console.log(reqData.body);

      fetch("http://localhost:8080/checklogin",reqData)
      .then(resp => resp.text())
      //.then(data => this.setState({st: data, success: true}))
      .then(data =>{if(data.length != 0 )
                   {
                     
                     const json = JSON.parse(data);
                     console.log(json);
                     if(json.login.user_type == "Daycare"){
                       this.setState({daycare:json})
                       localStorage.setItem("loggeduser" ,JSON.stringify(this.state.daycare));
                       mystore.dispatch({type:'LOGGEDIN'})
                       this.props.history.push("/daycarehome");
                     }
                     else if(json.login.user_type == "Seeker"){
                      this.setState({seeker:json})
                      localStorage.setItem("loggeduser" ,JSON.stringify(this.state.seeker));
                      mystore.dispatch({type:'LOGGEDIN'})
                      this.props.history.push("/seekerhome");
                     }
                     else if(json.login.user_type == "Admin"){
                      this.setState({admin:json})
                      localStorage.setItem("loggeduser" ,JSON.stringify(this.state.admin));
                      mystore.dispatch({type:'LOGGEDIN'})
                      this.props.history.push("/admindashboard");
                     }
                     var obj=JSON.parse(localStorage.getItem("loggeduser"))
                     
                   }
                   else{
                    this.setState({loginerror:"Wrong ID/pwd"})
                    }
                  })

  }
  handleChangeForgotpass= (e) =>{

    const loginUser_regex=/^[A-Za-z0-9.]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,5}$/;
    const ow_first_name_regex=/^[A-Z]{1}[a-z]{2,}$/
    let nm = e.target.name;
    let val = e.target.value;
    console.log(val);

    let errors=this.state.errors;
    let email_id_flag=this.state.email_id_valid;
    let answer_flag=this.state.answer_valid;


    switch (nm)
    {
      case 'email_id':
               if(!loginUser_regex.test(val))
               {
                 errors.email_id_error="Invalid User"
                 email_id_flag=false;
               }
               else{
                 errors.email_id_error="";
                 email_id_flag=true;
               }
               break;

      case 'answer':
                if(!ow_first_name_regex.test(val)){ 
                    errors.answer_error="First letter must be capital";
                    answer_flag=false;
                }
                else{
                    errors.answer_error="";
                    answer_flag=true;
                }
            break;        
     }

     this.setState({errors,[nm]:val,email_id_valid:email_id_flag,answer_valid:answer_flag }, ()=> {
        this.setState ({
           formvalid1 : this.state.email_id_valid && this.state.answer_valid
          })
       })
   }

  submitforgotpass=(e)=>{
    e.preventDefault();
    const reqData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email_id: this.state.email_id,
          answer: this.state.answer
        })
    };
    console.log(reqData.body);

    fetch("http://localhost:8080/forgotpass",reqData)
    .then(resp => resp.text())
    //.then(data => this.setState({st: data, success: true}))
    .then(data =>{if(data.length != 0 )
                 {
                 
                   const json = JSON.parse(data);
                   console.log(json);
                   this.setState({login:json})
                   localStorage.setItem("resetpass" ,JSON.stringify(this.state.login));
                   /*mystore.dispatch({type:'LOGGEDIN'})*/
                   this.props.history.push("/resetpassword");
                   var obj=JSON.parse(localStorage.getItem("resetpass"))
                   alert(obj.login_id)
                   alert(localStorage.getItem("resetpass"))
                 }
                 else{
                  this.setState({email_id:""});
                  this.setState({answer:""});
                  this.setState({loginerror1:"Wrong email/answer"})
                  alert("Wrong email/answer")
                  this.props.history.push("/");
                  }
                })
}

      render(){  

        return(

            <div className="login-wrapper" id="loginmain" >
     
             <form action="" className="form" onSubmit={this.submitReq}  >
             <img src={prof} alt="prof-pic" />
                  <h2>Login</h2>
                     <div className="input-group">
                         <input type="text" name="email_id" id="email_id" required onChange={this.handleChange}/>
                         <label for="email_id">User Name</label>
                         
                     </div>
              
                     <div className="input-group">
                         <input type="password" name="password" id="password" required onChange={this.handleChange}/>
                         <label for="password">Password</label>
                         
                     </div>

                    <input type="submit" value="Login" disabled={!this.state.formvalid} className="submit-btn" />

                    {this.state.errors.email_id_error}
                    <div>
                      
                    </div>
                    {this.state.errors.password_error}
                    <div>
                      
                    </div>
                    {this.state.loginerror}
                    <div>
                  
                      
                    </div>

                    <a href="#forgot-pw" name="forgotPassword" className="forgot-pw">Forgot Password?</a>

                    <div>
                      
                    </div>

                    <a href="/selectreg" className="forgot-pw">Register Here</a>

            </form>
        
            <div id="forgot-pw">

              <form action="" className="form"  onSubmit={this.submitforgotpass}>

                  <a href="#" class="close">&times;</a>
                    <h2>Reset Password</h2>

                      <div className="input-group">
                         <input type="email" name="email_id" id="email_id" required onChange={this.handleChangeForgotpass}/>
                         <label for="email_id">Email</label>
                      </div>
                      <div className="input-group">
                         <input type="text" name="answer" id="answer" required onChange={this.handleChangeForgotpass}/>
                         <label for="answer">Enter your favorite sport</label>
                      </div>

                  <input type="submit" value="Submit" disabled={!this.state.formvalid1} className="submit-btn" />
                  {this.state.errors.email_id_error}
                  {this.state.errors.answer_error}
                  {this.state.loginerror1}


              </form>
            </div>
        
          </div>
              
        );
      }
}
