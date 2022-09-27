import React from 'react'
import $ from 'jquery';
export default class BookDaycares extends React.Component{
    constructor(props){
        var obj=JSON.parse(localStorage.getItem("loggeduser"))
        super(props);
        this.state={
            candidate_first_name:"",
            candidate_last_name:"",
            age:"",
            date:"",
            card_no:"",
            daycare_amount:"",
            admin_amount:"",
            daycare_id:this.props.location.state.daycare_id,
            seeker_id:obj.seeker_id,
            price:this.props.location.state.price,
            vacancy:this.props.location.state.vacancy,
            dvacancy:"",
            st: {},
            success:false,

            errors:{
                candidate_first_name_error:"",
                candidate_last_name_error:"",
                date_error:"",
                age_error:"",
                card_no_error:"",
                vacancy_error:""
            },
                candidate_first_name_valid:false,
                candidate_last_name_valid:false,
                age_valid:false,
                date_valid:false,
                card_no_valid:false,
                vacancy_valid:false,
                formvalid:false
        }
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount()
      {
        $(document).ready(function(){
            var today=new Date();
            var month=today.getMonth()+1;
            var day=today.getDate()+1;
            var year=today.getFullYear();
            if((month==1||month==3||month==5||month==7||month==8||month==10||month==12)&&day==32)
            {
                day=1;
                month=month+1;
                if(month==13)
                {
                    month=1;
                    year=year+1;
                }
              
            }
            if((month==4||month==6||month==9||month==11)&&day==31)
            {
                day=1;
                month=month+1;
            }
            if(day==32 && month==12)
            {
                day=1;
                month=1;
                year=year+1;
            }

            if ((((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)) && month==2 && day==30)
            {
                day=1;
                month=month+1;
            }

            if(!(((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)) && month==2 && day==29)
            {
                day=1;
                month=month+1;
            }

            if(month < 10)
            {
                month= '0' + month.toString();
            }
            if(day < 10)
            {
                day= '0' + day.toString();
            }
            
            var minDate= year + '-' + month + '-' + day;
            $('.txtDate').attr('min', minDate);
          });
      }



    handleChange=(e)=>{
        const cdate=new Date();
        var dd=cdate.getDate();
        var mm=cdate.getMonth();
        var yy=cdate.getFullYear();
    
        const first_name_regex=/^[A-Z]{1}[a-z]{2,}$/;
        const last_name_regex=/^[A-Z]{1}[a-z]{2,}$/;
        const card_no_regex=/^[0-9]{16}$/;

        let nm = e.target.name;
        let val = e.target.value;
        let errors=this.state.errors;

        let candidate_first_name_flag=this.state.candidate_first_name_valid;
        let candidate_last_name_flag=this.state.candidate_last_name_valid;
        let age_flag= this.state.age_valid;
        let card_no_flag=this.state.card_no_valid;
        let date_flag=this.state.date_valid;
        let vacancy_flag=this.state.vacancy_valid;
        

        switch(nm)
        {
            case 'candidate_first_name':
                  if(!first_name_regex.test(val)){  
                    errors.candidate_first_name_error="First letter should be capital"
                    candidate_first_name_flag=false;
                }
                else{
                    errors.candidate_first_name_error="";
                    candidate_first_name_flag=true;
                }
            break;

            case 'candidate_last_name':
                  if(!last_name_regex.test(val)){  
                    errors.candidate_last_name_error="First letter should be capital"
                    candidate_last_name_flag=false;
                }
                else{
                    errors.candidate_last_name_error="";
                    candidate_last_name_flag=true;
                }
            break;

            case 'age':
                  if(!(val!=0&&val<120)){  
                    errors.age_error="Invalid age"
                    age_flag=false;
                }
                else{
                    errors.age_error="";
                    age_flag=true;
                }
            break;

            case 'card_no':
                if(!card_no_regex.test(val)){ 
                    errors.card_no_error="Invalid Card No";
                    card_no_flag=false;
                }
                else{
                    errors.card_no_error="";
                    card_no_flag=true;
                }
            break;
            case 'vacancy':
                if(this.state.vacancy==0){ 
                    errors.vacancy_error="0 vacancy cannot booked";
                    vacancy_flag=false;
                }
                else{
                    errors.vacancy_error="";
                    vacancy_flag=true;
                }
            break;
            case 'date':
                if(val==""){ 
                    errors.date_error="Invalid Date";
                    date_flag=false;
                }
                else{
                    errors.date_error="";
                    date_flag=true;
                    
                            const url="http://localhost:8080/getvacancybydateanddaycare?date="+val+"&daycare_id="+this.state.daycare_id;
                            
                            console.log(this.state.vacancy)
                            fetch(url)
                            .then(resp => resp.json())
                            .then(data => {this.setState({dvacancy: data[0]});
                            
                            if(data==0 && data[0]!=0)
                            {
                               
                                alert("Success");
                                alert(this.state.vacancy);
                            }
                            else
                            {
                                if(data[0]==0){
                                    alert("Vacancy is 0 cannot book");
                                    this.props.history.push("/seekerhome");
                                    
                                }
                                alert("Failed");
                                this.setState({vacancy:this.state.dvacancy })

                               
                            }
                        });
                }
            break;
        }

        
    this.setState({errors,[nm]:val,candidate_first_name_valid:candidate_first_name_flag,
        candidate_last_name_valid:candidate_last_name_flag,
        age_valid:age_flag,
        card_no_valid:card_no_flag,
        vacancy_valid:vacancy_flag,
        date_valid:date_flag

    },()=>{ this.setState({formvalid:this.state.candidate_first_name_valid && this.state.candidate_last_name_valid && this.state.age_valid && this.state.card_no_valid && this.state.date_valid && this.state.vacancy_valid})})
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

                candidate_first_name:this.state.candidate_first_name,
                candidate_last_name:this.state.candidate_last_name,
                age:this.state.age,
                date:this.state.date,
                card_no:this.state.card_no,
                daycare_amount:this.state.daycare_amount,
                admin_amount:this.state.admin_amount,
                daycare_id:this.state.daycare_id,
                seeker_id:this.state.seeker_id,
                vacancy:this.state.vacancy
            })
        };


        console.log(reqData.body);
        fetch("http://localhost:8080/savebooking",reqData)
        .then(resp =>
            {
                if(resp.status == 200)
                {
                    alert("Booked Successfully");
                    this.props.history.push("/seekerhome");
                    
                }
                else
                {
                    alert("Booking Failed");
    
                }
            })
        .then(data => this.setState({st: data, success: true}));
        
    }


    render(){
        console.log(this.state.daycare_id)
        console.log(this.state.price)
        console.log(this.state.seeker_id)
        return(
            <div className="container justify-content-center p-5 mt-5 mb-5 form-reg font-size-form" >
            <form className="" onSubmit={this.submitReq} >
                <div className="text-center orangecolor"><h1>Booking Information</h1></div>
                <div class="row m-3">
                    <div class="col-md">
                        <label for="candidate_first_name">Candidate First Name : </label>
                        <input  type="text" name="candidate_first_name" id="candidate_first_name" className=" input-group form-control" required="true" onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors.candidate_first_name_error}</span>
                    </div>
                    <div class="col-md">
                        <label for="candidate_last_name"> Candidate Last Name : </label>
                        <input type="text" name="candidate_last_name" id="candidate_last_name" className=" input-group form-control" required="true" onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors.candidate_last_name_error}</span>
                    </div>
                </div>
                <div class="row m-3">
                    <div class="col-md">
                        <label for="age"> Age : </label>
                        <input type="number" name="age" id="age" class=" form-control" required="true" onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors.age_error}</span>
                    </div>
                    <div class="col-md">
                        <label for="card_no"> Card Number </label>
                        <input type="text" name="card_no" id="card_no" class="form-control"  required="true" onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors.card_no_error}</span>
                   </div>
                </div>
                <div class="row m-3">
                    <div class="col-md">
                        <label for="date"> Date : </label>
                        <input type="date" name="date" id="date" pattern="yyyy-MM-dd"  class=" form-control txtDate" required="true" onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors.date_error}</span>
                        
                    </div>
                    <div class="col-md">
                        <label for="price"> Price </label>
                        <input type="text" name="price" id="price" class="form-control" value={this.state.price} disabled required="true" onChange={this.handleChange} />
                   </div>
                </div>
                <div class="row m-3">
                    <div class="col-md">
                        <label for="vacancy"> Vacancy : </label>
                        <input type="text" name="vacancy" id="vacancy"  class=" form-control" required="true" value={this.state.vacancy} disabled onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors.vacancy_error}</span>
                    </div>
                    <div class="col-md">
                        
                   </div>
                </div>
                <div class="row m-3">
                <div class="col-md-3 "></div>
                <div class="col-md-3 ">
                    <input type="submit" name="submitdata" id="submitdata" className="float-right submit-reg" value="Booked"></input>
                    
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