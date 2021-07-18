import React from 'react'
import './style.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



function About() {
    return (
        <div className="section">
            <div className="container3">
                <div className="content-section">
                    <div className="title">
                        <h1>About Us</h1>
                    </div>
                    <div className="content">
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi quas nam nisi rem nobis itaque ipsum.
                                  fuga doloremque. Asperiores, labore commo
                                  Modi quas nam nisi rem nobis itaque ipsum.
                                  fuga doloremque. Asperiores, labore commodi.</p>
                        <div className="button">
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="social">
                        <a href="#">
                            <FacebookIcon />
                        </a>
                        <a href="#">
                            <InstagramIcon />
                        </a>
                        <a href="#">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
                <div className="image-section">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyAplfcGskhKD6BYLxPbdnC4K92RDPKaUUQ&usqp=CAU" alt=""/>
                </div>
            </div>

        </div>
    )
}

export default About
