import "./login.css";
import {Link}from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";




export default function Login (){
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

     const heandlChange = (e)=>{
         e.perventDefaut()

         console.log("")
        //  auth
        //  .signInWithEmailAndPassword(email,password)
        //  .then(res =>{
        //      if(res.user){

        //         console.log(res.user)
             
        //      alert("user is logged in")
        //      }
        //  }).catch(e=>{
        //      console.log(e)
        //  })
        // auth
        // .signInWithEmailAndPassword(email,password)
        // .then(user =>{
        //     alert("user is login succsessfully")
        // })
     }

    return(
        <div className="login">
            <span className="loginTitle">Login</span>
            <form onSubmit={heandlChange} className="loginForm">
                <label>Email</label>
                <input onChange={(e)=> setEmail(e.target.value)} type="text"className="loginInput" placeholder="Enter your email..."/>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="loginInput" placeholder="Enter your password..."/>
                <button type="submit" className="loginButton">Login </button>
                


            
            </form>
            <button className="loginRegsterForm"> <Link className="link" to="/Login">LOGIN</Link>
            </button>
            
                


        </div>
    )
}