import React from 'react'
export default function AboutPage() {
    return (
        <div>
            <div className="bodyContainer container-fluid">
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
