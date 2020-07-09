import React from 'react'

export default function Navbar() {
    return (
        <div>
            {/* <!--Mobile Navbar--></div> */}
            <div class="mattsmobnavbar mobgrid">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    {/* <!--Site links--> */}
                    <div class="graphicNavbar"></div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse  mobsiteList" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a href="#home">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a href="#aboutMe">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a href="#contactMe">Contact</a>
                            </li>
                            {/* <!--Social Menu--> */}

                        </ul>

                        <div class="navbar-nav mobsocialList">


                            <a class="socialItem" href="https://www.facebook.com/matthew.teague.37" target="_blank"><img height="32"
                                width="32" class="secondImage" src="https://image.flaticon.com/icons/svg/733/733547.svg"
                                alt="Facebook icon" /></a>

                            <a class="socialItem" href="https://www.linkedin.com/in/matthew-teague-3496a4b2/" target="_blank"><img
                                height="32" width="32" class="secondImage" src="https://image.flaticon.com/icons/svg/1409/1409945.svg"
                                alt="LinkedIn icon" /></a>

                            <a class="socialItem" href="https://github.com/trojanface" target="_blank"><img height="32" width="32"
                                class="secondImage" src="https://image.flaticon.com/icons/svg/270/270798.svg" alt="GitHub icon" /></a>


                        </div>

                    </div>
                </nav>
            </div>

            {/* 
  <!--Desktop Navbar--> */}

            <nav class="mattsnavbar">
                <div class="graphicNavbar"></div>
                <img src="./assets/Mlogo.png" id="logo" width="150vw" height="70vh" />
                {/* <!--Site Links--> */}
                <ul class="siteList">
                    <li>
                        <div class="alignR pad0 mainLinks">
                            <a href="#home">Home</a>
                        </div>
                    </li>
                    <li>
                        <div class="alignR pad1 mainLinks">
                            <a href="#aboutMe">About</a>
                        </div>
                    </li>
                    <li>
                        <div class="alignR pad2 mainLinks">
                            <a href="#portfolio">Portfolio</a>
                        </div>
                    </li>
                    <li>
                        <div class="alignR pad3 mainLinks">
                            <a href="#contactMe">Contact</a>
                        </div>
                    </li>
                </ul>
                {/* <!--Social Menu--> */}

                <div class="socialList">
                    <a class="socialItem buzz-out-on-hover" href="https://www.facebook.com/matthew.teague.37" target="_blank"><img
                        height="42" width="42" class="secondImage" src="https://image.flaticon.com/icons/svg/733/733547.svg"
                        alt="Facebook icon" /></a>
                    <a class="socialItem buzz-out-on-hover" href="https://www.linkedin.com/in/matthew-teague-3496a4b2/"
                        target="_blank"><img height="42" width="42" class="secondImage"
                            src="https://image.flaticon.com/icons/svg/1409/1409945.svg" alt="LinkedIn icon" /></a>
                    <a class="socialItem buzz-out-on-hover" href="https://github.com/trojanface" target="_blank"><img height="42"
                        width="42" class="secondImage" src="https://image.flaticon.com/icons/svg/270/270798.svg"
                        alt="GitHub icon" /></a>
                </div>

            </nav>
        </div>
    )
}
