import "./topbar.css"
import {Link}from "react-router-dom";


export default function Topbar(){
    const user = false;
    return(
        <div className="Top">
            <div className="logoimg">
                <img src="/images/log.jpeg" alt="logo"/>
            </div>
        <div className="topLeft">
       <a href="https://he-il.facebook.com/goanar.abraham/photos"> 
       <i className="topIcon1 fab fa-facebook-square"></i>
       </a> 
        <i className="topIcon2 fab fa-tiktok"></i>
        <i className="topIcon3 fab fa-pinterest-square"></i>
        <i className="topIcon4 fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
                <li className="topListItem"> <Link className="link" to="/blog">BLOG</Link></li>
                <li className="topListItem"> <Link className="link" to="/contact">CONTACT</Link></li>
                <li className="topListItem">{user && "LOGOUT"}
                </li>

            </ul>
        </div>
        <div className="topRight">
            {user ?(
                <img
                className="topimg"
                 src="./images/img2.jpeg" alt=""/>
            ):
            (
            
            <ul className="topList">
                <li className="topListItem">
                <Link className="link" to="/Login">
                    LOGIN
                    </Link>
                    </li>
                <li className="topListItem">
                <Link className="link" to="/Register">
                    BOOKING
                </Link>
                </li>
                </ul>
            
             ) }
            
        <i className="topSearchIcon fas fa-search"></i>
        </div>

        </div>
    )
}