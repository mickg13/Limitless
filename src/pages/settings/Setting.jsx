import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting (){
    return(
        <div className="setting">
         <div className="settingWrapper">
             <div className="settingTitle">
                 <span className="settingUpdateTitle">Update your Account</span>
                 <span className="settingDeleteTitle">delete Account</span>
          </div>
          <form className="settingForm">
              <label> Profile Picture</label>
              <div className="settingPP">
                  <img src="/images/img1.jpeg" alt=""/>
                  <label htmlFor="fileInput">
                  <i class="settingPPIcon fas fa-user-circle"></i>
                  </label>
                  <input type="file"id="fileInput" style={{display:"none"}}/>

              </div>
              <label>Uesername</label>
              <input type="text"placeholder="Goanar"/>
              <label>Email</label>
              <input type="email"placeholder="goanar@gmailcom"/>
              <label>Password</label>
              <input type="password"/>
              <button className="settingSubmit">Update</button>
          </form>
         </div>
         <Sidebar />
         </div>
    )
}