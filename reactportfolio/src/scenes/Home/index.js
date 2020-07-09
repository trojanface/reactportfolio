import React from 'react'
export default function HomePage() {
    return (
        <div>
            <div className="container-fluid">
                <div className="img-thumbnail rounded mx-auto d-block pt-4 largeMarg row">

                    <div className="col-lg-10 offset-lg-1">
                        <h1 id="home" className="lineSpacing">Hi there!</h1>
                        <p className="lineSpacing">My name is Matthew Teague and I'm a full-stack web developer, lover of sleek designs and mind-bogglingly
            cool code. </p>
                        <p className="lineSpacing">From stylish websites to intricate scripts, if it happens within the bounds of a
                        screen,
            then I'm your man.</p>
                        <p className="lineSpacing">Want to drop me a line? Just click below.</p>

                        <a className="mattsButton btn btn-primary btn-lg hvr-bob bubble"
                            href="mailto:matthewjteague@outlook.com?subject='Profile Enquiry'&body=" role="button">Get in touch</a>
                    </div>
                </div>
                <div className="hideme img-thumbnail rounded mx-auto d-block largeMarg row">


                    <div className="px-0 col-lg-10 offset-lg-1">
                        <h1 id="aboutMe" className="lineSpacing">About Me</h1>
                        <p className="lineSpacing">I love programming! I've been doing it for over 10 years personally, working on games
                        at home and useful programs for previous workplaces. Recently I undertook
                        a University of Adelaide bootcamp and decided to share my skills professionally, pursuing
                        a career as a Full Stack Web Developer. It's my mission to work with businesses wanting to achieve their
                        fullest
            potential online. </p>
                        <p className="lineSpacing">Whether it's an exciting home page for customers, a useful web app for
            employees or something completely new, I want to be there to help.</p>
                        <p className="lineSpacing">My technical skills include: HTML5, CSS3, Javascript, Bootstrap, Tailwind, jQuery,
                        Express.js,
            React.js, Node.js, MongoDB, MySQL, Github and Terminal.</p>
                        <p className="lineSpacing">For a full copy of my resume click below!</p>

                        <a className="mattsButton buzz-out-on-hover btn btn-primary btn-lg" href="MatthewTeagueResume2020internetsafe.pdf"
                            download>Download
            PDF</a>

                    </div>
                </div>
                <div className="hideme img-thumbnail rounded mx-auto d-block largeMarg row">
                    <div className="row mr-0">
                        <div className="offset-lg-1"></div>

          <div className="col-lg-10">
                            <h1 id="portfolio">Example Projects</h1>
                            <div className="row my-5">
                                <div className="col-lg-6 mb-3">
                                    <img src="screenshot.png" alt="Code Quiz Screenshot" className="img-thumbnail rounded mx-auto d-block"/>
              </div>
                                    <div className="col-lg-6">
                                        <h3>Javascript Quiz</h3>
                                        <p>A timed quiz designed to test your proficiency with javascript concepts. Created using HTML,
                                        Bootstrap, CSS and Javascript.
                </p>
                                        <a className="mattsButton buzz-out-on-hover" href="https://trojanface.github.io/codequiz/"
                                            target="_blank">View Site</a>
                                        <a className="mattsButton buzz-out-on-hover" href="https://github.com/trojanface/codequiz"
                                            target="_blank">View Repo</a>
                                    </div>

                                </div>

                                <div className="row my-5">
                                    <div className="col-lg-6 mb-3">
                                        <img src="Homedes.png" alt="Coronavirus Guide" className="img-thumbnail rounded mx-auto d-block"/>
            </div>
                                        <div className="col-lg-6">
                                            <h3>Quarantine and Isolation Guide</h3>
                                            <p>A web application designed to help people stay abreast of current news relating to the Coronavirus
                                            outbreak. It features world news and Australian news with the option of adding state based statistics
                                            also. Created using HTML, CSS, Javascript, jQuery, Tailwind and AJAX API calls.
              </p>
                                            <a className="mattsButton buzz-out-on-hover" href="https://amarr001.github.io/Project-1/" target="_blank">View
                Site</a>
                                            <a className="mattsButton buzz-out-on-hover" href="https://github.com/amarr001/Project-1" target="_blank">View
                Repo</a>
                                        </div>
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-lg-6 mb-3">
                                            <img src="desktop.png" alt="My Weather Dashboard" className="img-thumbnail rounded mx-auto d-block"/>
            </div>
                                            <div className="col-lg-6">
                                                <h3>My Weather Dashboard</h3>
                                                <p>This is a weather dashboard that allows the user to search for a city's weather data. It provides the
                                                current data as well as a five day forecast. Created with HTML, CSS, Javascript, jQuery, Bootstrap and
                                                AJAX API calls.
              </p>
                                                <a className="mattsButton buzz-out-on-hover" href="https://trojanface.github.io/weatherdashboard/"
                                                    target="_blank">View
                Site</a>
                                                <a className="mattsButton buzz-out-on-hover" href="https://github.com/trojanface/weatherdashboard"
                                                    target="_blank">View Repo</a>
                                            </div>
                                        </div>
                                        <div className="row my-5">
                                            <div className="col-lg-6 mb-3">
                                                <img src="kicksU.png" alt="Kicks United" className="img-thumbnail rounded mx-auto d-block"/>
            </div>
                                                <div className="col-lg-6">
                                                    <h3>Kicks United</h3>
                                                    <p>A full-stack application simulating an online shoe store. Sign-up new users, login and logout user
                                                    sessions and add & remove items from the cart. Created with HTML, CSS, Javascript, jQuery, Bootstrap,
                                                    mySQL, node.js, npm, sequelize, passport, bcrypt and
                                                    AJAX API calls.
              </p>
                                                    <a className="mattsButton buzz-out-on-hover" href="https://kicksunited.herokuapp.com/" target="_blank">View
                Site</a>
                                                    <a className="mattsButton buzz-out-on-hover" href="https://github.com/bhamann-collab/shop"
                                                        target="_blank">View Repo</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="hideme img-thumbnail rounded mx-auto d-block largeMarg row">
                                    <div className="offset-lg-1"></div>

                                    <div className="px-0 col-lg-10 alignC">
                                        <h5>Get in touch - matthewjteague@outlook.com</h5>
                                        <a href="mailto:matthewjteague@outlook.com?subject='Profile Enquiry'&body="
                                            className="mattsButton btn btn-primary mt-4 hvr-bob bubble">Get in touch</a>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}
