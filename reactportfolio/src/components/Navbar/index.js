import React from 'react'

export default function Navbar() {
    return (
        <div>
            {/* <!--Mobile Navbar--></div> */}
            <div className="mattsmobnavbar mobgrid">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    {/* <!--Site links--> */}
                    <div className="graphicNavbar"></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  mobsiteList" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a href="#/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a href="#/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contactMe">Contact</a>
                            </li>
                            {/* <!--Social Menu--> */}

                        </ul>

                        <div className="navbar-nav mobsocialList">


                            <a className="socialItem" href="https://www.facebook.com/matthew.teague.37" target="_blank"><img height="32"
                                width="32" className="secondImage" src="https://image.flaticon.com/icons/svg/733/733547.svg"
                                alt="Facebook icon" /></a>

                            <a className="socialItem" href="https://www.linkedin.com/in/matthew-teague-3496a4b2/" target="_blank"><img
                                height="32" width="32" className="secondImage" src="https://image.flaticon.com/icons/svg/1409/1409945.svg"
                                alt="LinkedIn icon" /></a>

                            <a className="socialItem" href="https://github.com/trojanface" target="_blank"><img height="32" width="32"
                                className="secondImage" src="https://image.flaticon.com/icons/svg/270/270798.svg" alt="GitHub icon" /></a>


                        </div>

                    </div>
                </nav>
            </div>

            {/* 
  <!--Desktop Navbar--> */}

            <nav className="mattsnavbar">
                <div className="graphicNavbar"></div>
                <img src={require("./assets/Mlogo.png")} id="logo" width="150vw" height="70vh" />
                {/* <!--Site Links--> */}
                <ul className="siteList">
                    <li>
                        <div className="alignR pad0 mainLinks">
                            <a href="#/">Home</a>
                        </div>
                    </li>
                    <li>
                        <div className="alignR pad2 mainLinks">
                            <a href="#/portfolio">Portfolio</a>
                        </div>
                    </li>
                    <li>
                        <div className="alignR pad3 mainLinks">
                            <a href="#contactMe">Contact</a>
                        </div>
                    </li>
                </ul>
                {/* <!--Social Menu--> */}

                <div className="socialList">
                    <a className="socialItem buzz-out-on-hover" href="https://www.facebook.com/matthew.teague.37" target="_blank"><img
                        height="42" width="42" className="secondImage" src="https://image.flaticon.com/icons/svg/733/733547.svg"
                        alt="Facebook icon" /></a>
                    <a className="socialItem buzz-out-on-hover" href="https://www.linkedin.com/in/matthew-teague-3496a4b2/"
                        target="_blank"><img height="42" width="42" className="secondImage"
                            src="https://image.flaticon.com/icons/svg/1409/1409945.svg" alt="LinkedIn icon" /></a>
                    <a className="socialItem buzz-out-on-hover" href="https://github.com/trojanface" target="_blank"><img height="42"
                        width="42" className="secondImage" src="https://image.flaticon.com/icons/svg/270/270798.svg"
                        alt="GitHub icon" /></a>
                </div>

            </nav>
        </div>
    )
}
