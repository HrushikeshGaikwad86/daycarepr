import React from 'react'
export default class EditDaycareInfomation extends React.Component{
    constructor(props){
        var obj=JSON.parse(localStorage.getItem("loggeduser"))
        super(props)
        this.state={
            daycare_id:"",
            daycare_name:obj.daycare_name,
            address:obj.address,
            area:obj.area,
            pincode:obj.pincode,
            contact_no:obj.contact_no,
            license_no:obj.license_no,
            email_id:"",
            ow_first_name:"",
            ow_last_name:"",
            password:"",
            confirm_password:"",
            aadhar_no:obj.aadhar_no,
            ow_contact_no:"",
            daycare_type:obj.daycare_type,
            capacity:obj.capacity,
            price:obj.price,
            timing:obj.timing,
            answer:"",
            st: {},
            success:false,
            errors:{
                daycare_name_error:"",
                address_error:"",
                area_error:"",
                pincode_error:"",
                contact_no_error:"",
                license_no_error:"",
                email_id_error:"",
                ow_first_name_error:"",
                ow_last_name_error:"",
                password_error:"",
                confirm_password_error:"",
                aadhar_no_error:"",
                ow_contact_no_error:"",
                daycare_type_error:"",
                timing_error:"",
                answer_error:""
            },
            daycare_name_valid: false,
            address_valid: false,
            area_valid: false,
            pincode_valid: false,
            contact_no_valid: false,
            license_no_valid: false,
            email_id_valid: false,
            ow_first_name_valid: false,
            ow_last_name_valid: false,
            password_valid: false,
            confirm_password_valid: false,
            aadhar_no_valid: false,
            ow_contact_no_valid: false,
            daycare_type_valid: false,
            timing_valid: false,
            answer_valid: false,
            formvalid:false
        }
    }

    handleChange=(e) =>{
        const email_id_regex=/^[A-Za-z0-9.]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,5}$/;
        const password_regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[A-Za-z0-9!@#$%^&*]{5,}$/
        const ow_first_name_regex=/^[A-Z]{1}[a-z]{2,}$/
        const timing_regex=/^[0-9]{1,}AM to [0-9]{1,}PM/
        const ow_last_name_regex=/^[A-Z]{1}[a-z]{2,}$/
        const contact_no_regex=/^[0-9]{10}$/
        const pincode_regex=/^[0-9]{6}$/
        const aadhar_no_regex=/^[0-9]{12}$/
        let nm = e.target.name;
        let val = e.target.value;
        console.log(val);
        let errors=this.state.errors;
        let daycare_name_flag=this.state.daycare_name_valid;
        let address_flag=this.state.address_valid;
        let area_flag=this.state.area_valid;
        let pincode_flag=this.state.pincode_valid;
        let contact_no_flag=this.state.contact_no_valid;
        let license_no_flag=this.state.license_no_valid;
        let email_id_flag=this.state.email_id_valid;
        let ow_first_name_flag=this.state.ow_first_name_valid;
        let ow_last_name_flag=this.state.ow_last_name_valid;
        let password_flag=this.state.password_valid;
        let confirm_password_flag=this.state.confirm_password_valid;
        let aadhar_no_flag=this.state.aadhar_no_valid;
        let ow_contact_no_flag=this.state.ow_contact_no_valid;
        let daycare_type_flag=this.state.daycare_type_valid;
        let timing_flag=this.state.timing_valid;
        let answer_flag=this.state.answer_valid;
        
        switch(nm)
        {
            case 'email_id':
                  if(!email_id_regex.test(val)){  
                    errors.email_id_error="Invalid email"
                    email_id_flag=false;
                }
                else{
                    errors.email_id_error="";
                    email_id_flag=true;
                }
            break;
            case 'password':
                if(!password_regex.test(val)){ 
                    errors.password_error="Password has atleast one capital letter,small letter,number and special character";
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
            case 'ow_first_name':
                if(!ow_first_name_regex.test(val)){ 
                    errors.ow_first_name_error="First letter should be capital";
                    ow_first_name_flag=false;
                }
                else{
                    errors.ow_first_name_error="";
                    ow_first_name_flag=true;
                }
            break;
            case 'ow_last_name':
                if(!ow_last_name_regex.test(val)){ 
                    errors.ow_last_name_error="First letter should be capital";
                    ow_last_name_flag=false;
                }
                else{
                    errors.ow_last_name_error="";
                    ow_last_name_flag=true;
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
            case 'ow_contact_no':
                if(!contact_no_regex.test(val)){ 
                    errors.ow_contact_no_error="Invalid Contact";
                    ow_contact_no_flag=false;
                }
                else{
                    errors.ow_contact_no_error="";
                    ow_contact_no_flag=true;
                }
            break;
            case 'pincode':
                if(!pincode_regex.test(val)){ 
                    errors.pincode_error="Invalid Pincode";
                    pincode_flag=false;
                }
                else{
                    errors.pincode_error="";
                    pincode_flag=true;
                }
            break;
            case 'aadhar_no':
                if(!aadhar_no_regex.test(val)){ 
                    errors.aadhar_no_error="Invalid Aadhar No";
                    aadhar_no_flag=false;
                }
                else{
                    errors.aadhar_no_error="";
                    aadhar_no_flag=true;
                }
            break;
            case 'daycare_name':
                if(val==""){ 
                    errors.daycare_name_error="Required";
                    daycare_name_flag=false;
                }
                else{
                    errors.daycare_name_error="";
                    daycare_name_flag=true;
                }
            break;
            case 'address':
                if(val==""){ 
                    errors.address_error="Required";
                    address_flag=false;
                }
                else{
                    errors.address_error="";
                    address_flag=true;
                }
            break;
            case 'area':
                if(!ow_first_name_regex.test(val)){ 
                    errors.area_error="First letter must be capital";
                    area_flag=false;
                }
                else{
                    errors.area_error="";
                    area_flag=true;
                }
            break;
            case 'license_no':
                if(val==""){ 
                    errors.license_no_error="Required";
                    license_no_flag=false;
                }
                else{
                    errors.license_no_error="";
                    license_no_flag=true;
                }
            break;
            case 'daycare_type':
                if(val==""){ 
                    errors.daycare_type_error="Required";
                    daycare_type_flag=false;
                }
                else{
                    errors.daycare_type_error="";
                    daycare_type_flag=true;
                }
            break;
            
            case 'timing':
                if(!timing_regex.test(val)){ 
                    errors.timing_error="Invalid Timing";
                    timing_flag=false;
                }
                else{
                    errors.timing_error="";
                    timing_flag=true;
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
        this.setState({errors,[nm]:val,daycare_name_valid:daycare_name_flag,
            address_valid:address_flag,
            area_valid:area_flag,
            pincode_valid:pincode_flag,
            contact_no_valid:contact_no_flag,
            license_no_valid:license_no_flag,
            email_id_valid:email_id_flag,
            ow_first_name_valid:ow_first_name_flag,
            ow_last_name_valid:ow_last_name_flag,
            password_valid:password_flag,
            confirm_password_valid:confirm_password_flag,
            aadhar_no_valid:aadhar_no_flag,
            ow_contact_no_valid:ow_contact_no_flag,
            daycare_type_valid:daycare_type_flag,
            timing_valid:timing_flag,
            answer_valid:answer_flag},()=>{this.setState({formvalid:this.state.email_id_valid && this.state.password_valid && this.state.daycare_name_valid && this.state.address_valid && this.state.area_valid && this.state.pincode_valid && this.state.contact_no_valid && this.state.license_no_valid && this.state.ow_first_name_valid && this.state.ow_last_name_valid && this.state.confirm_password_valid && this.state.aadhar_no_valid && this.state.ow_contact_no_valid && this.state.daycare_type_valid && this.state.timing_valid && this.state.answer_valid})})
    }

    submitReq=(e)=>{
        var obj=JSON.parse(localStorage.getItem("loggeduser"))
                     alert(obj.login.login_id)
                     alert(localStorage.getItem("loggeduser"))
        e.preventDefault();
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                daycare_id:obj.daycare_id,
                daycare_name: this.state.daycare_name,
                address: this.state.address,
                area: this.state.area,
                pincode: this.state.pincode,
                contact_no: this.state.contact_no,
                license_no: this.state.license_no,
                password: obj.password,
                email_id: obj.email_id,
                ow_first_name: obj.ow_first_name,
                ow_last_name: obj.ow_last_name,
                aadhar_no: this.state.aadhar_no,
                ow_contact_no: obj.ow_contact_no,
                daycare_type: this.state.daycare_type,
                capacity: this.state.capacity,
                price: this.state.price,
                timing: this.state.timing,
                answer: obj.answer
            })
            
        };
        console.log(reqData.body);

        fetch("http://localhost:8080/editdaycareinformationby",reqData)
        .then(resp => {
            if(resp.status == 200)
            {
                alert("Edit Successfully");
            }
            else
            {
                alert("Edit Failed");

            }
        })
        .then(data => this.setState({st: data, success: true}));

    }

    render(){
        var obj=JSON.parse(localStorage.getItem("loggeduser"))
        return(
            <div className="container form-reg justify-content-center p-5 mt-5 mb-5 font-size-form">
                <form onSubmit={this.submitReq} >
                    <div className="text-center orangecolor"><h1>Edit Information</h1></div>
                    <div class="row m-3">
                        <div class="col-md">
                            <label for="daycare_name"> Daycare Name : </label>
                            <input type="text" name="daycare_name" id="daycare_name" value={this.state.daycare_name} class="form-control" required="true" onChange={this.handleChange}/>
                            {this.state.errors.daycare_name_error}
                        </div>
                        <div class="col-md">
                            <label for="address">  Address : </label>
                            <input type="text" name="address" id="address" value={this.state.address} class="form-control" required="true" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="col-md">
                            <label for="area"> Area : </label>
                            <input type="text" name="area" id="area" value={this.state.area} class="form-control" required="true" onChange={this.handleChange}/>
                            {this.state.errors.area_error}
                        </div>
                        <div class="col-md">
                            <label for="pincode"> Pincode : </label>
                            <input type="text" name="pincode" id="pincode" value={this.state.pincode} class="form-control" required="true" onChange={this.handleChange}/>
                            {this.state.errors.pincode_error}
                        </div>
                    </div>
          
                    <div class="row m-3">
                        <div class="col-md">
                            <label for="license_no">  License No : </label>
                            <input type="text" name="license_no" id="license_no" value={this.state.license_no} class="form-control" required="true" onChange={this.handleChange}/>
                            {this.state.errors.license_no_error}
                        </div>
                        <div class="col-md">
                            <label for="aadhar_no"> Aadhar No : </label>
                            <input type="text" name="aadhar_no" id="aadhar_no" value={this.state.aadhar_no} class="form-control" required="true" onChange={this.handleChange}/>
                            {this.state.errors.aadhar_no_error}
                        </div>
                        
                    </div>
                    <div class="row m-3">
                        <div class="col-md">
                            <label for="capacity"> Capacity : </label>
                            <input type="Number" name="capacity" id="capacity" disabled value={this.state.capacity} class="form-control" required="true" onChange={this.handleChange}/>   
                        </div>
                        <div class="col-md">
                            <label for="price"> Price : </label>
                            <input type="Number" name="price" id="price" value={this.state.price}  class="form-control" required="true" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="col-md">
                            <label for="timing"> Timing : </label>
                            <input type="text" name="timing" id="timing" value={this.state.timing}  class="form-control"  required="true" placeholder="9AM to 6PM" onChange={this.handleChange}/>
                            {this.state.errors.timing_error}
                        </div>
                        <div class="col-md">
                            <span class="form-check">
                                <input class="form-check-input" type="radio" name="daycare_type" id="daycare_type" value="child" onChange={this.handleChange}></input>
                                <label for="daycare_type">Children</label>
                            </span>
                            <span class="form-check">
                                <input class="form-check-input" type="radio" name="daycare_type" id="daycare_type" value="senior" onChange={this.handleChange}></input>
                                <label for="daycare_type">Senior</label>
                            </span>
                            <span class="form-check">
                                <input class="form-check-input" type="radio" name="daycare_type" id="daycare_type" value="both" onChange={this.handleChange}></input>
                                <label for="daycare_type">Both</label>
                            </span>
                            {this.state.errors.daycare_type_error}
                        </div>    
                    </div>
    
                    
                    <div class="row m-3">
                        <div class="col-md-3 "></div>
                        <div class="col-md-3 ">
                            <input type="submit" name="submitdata" id="submitdata" className="float-right submit-reg" value="Submit"></input>
                        </div>   
                        <div class="col-md-3 ">
                            <input type="reset" name="resetdata" id="resetdata" className=" submit-reg" value="Reset"></input>
                        </div> 
                        <div class="col-md-4 "></div>
                    </div>
                </form>
            </div>
        )
    }
    
    
}