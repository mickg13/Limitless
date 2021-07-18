// import "./register.css";
// import {Link}from "react-router-dom";


// export default function register (){
//     return(
//         <div className="register">
//             <span className="registerTitle">Register</span>
//             <form className="registerForm">
//                 <label>Uesername</label>
//                 <input type="text"className="registerInput" placeholder="Enter your uesername..."/>

//                 <label>Email</label>
//                 <input type="text"className="registerInput" placeholder="Enter your email..."/>
                



//                  <label>Password</label>
//                 <input type="password" className="registerInput" placeholder="Enter your password..."/>
//                 <button className="registerButton">Register </button>
                


            
//             </form>
//             <button className="regsterloginButton">REGISTER <Link className="link" to="/Register"></Link>
//             </button>
            
        
                


//         </div>
//     )
// }
// 

import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';




function Register() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <TimePicker value={selectedDate} onChange={handleDateChange} />
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
      
    </div>
  )
}

export default Register
