import React from 'react'
export default class ViewDaycareForDaycares extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            
        }
    }

    render(){
        var obj=JSON.parse(localStorage.getItem("loggeduser"))
        return(
            <div className="container form-reg justify-content-center p-5 mt-3 mb-5 font-size-form">
                <form onSubmit={this.submitReq} >
                    <div className=" orangecolor"><h2>Daycare Information</h2></div>
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
                            <label for="aadhar_no"> Aadhar No : {obj.aadhar_no}</label>
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
                        <div class="col-md">
                            <label for="timing"> Timing : {obj.timing}</label>    
                        </div>
                        <div class="col-md">
                            <label for="answer"> Your favourite sport = {obj.answer}</label>   
                        </div>    
                    </div> 
                </form>
            </div>
        )
    }
}

