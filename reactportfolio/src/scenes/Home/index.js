import React from 'react'
import Contact from '../../components/Contact'
export default function HomePage() {
    return (
        <div>

            <div className="bodyContainer container-fluid">
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


                <Contact />
            </div>
        </div>
    )
}
