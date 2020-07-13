import React from 'react'
import Contact from '../../components/Contact'
import ProjectCard from './components/ProjectCard'
export default function ProjectPage() {
    return (
        <div>
            <div className="bodyContainer container-fluid">
                <div className="hideme img-thumbnail rounded mx-auto d-block largeMarg row">
                    <div className="row mr-0">
                        <div className="offset-lg-1"></div>
                        <div className="col-lg-10">
                            <h1 id="portfolio">Example Projects</h1>
{/* Imports each project and passes the project details to the component for rendering */}
                            <ProjectCard image="./assets/screenshot.png" alt="Code Quiz Screenshot" title="Javascript Quiz" description="A timed quiz designed to test your proficiency with javascript concepts. Created using HTML,
                                        Bootstrap, CSS and Javascript." siteLink="https://trojanface.github.io/codequiz/" repoLink="https://github.com/trojanface/codequiz" />

                            <ProjectCard image="./assets/Homedes.png" alt="Coronavirus Guide" title="Quarantine and Isolation Guide" description="A web application designed to help people stay abreast of current news relating to the Coronavirus
                                            outbreak. It features world news and Australian news with the option of adding state based statistics
                                            also. Created using HTML, CSS, Javascript, jQuery, Tailwind and AJAX API calls." siteLink="https://amarr001.github.io/Project-1/" repoLink="https://github.com/amarr001/Project-1" />

                            <ProjectCard image="./assets/desktop.png" alt="./assets/desktop.png" title="My Weather Dashboard" description="This is a weather dashboard that allows the user to search for a city's weather data. It provides the
                                                current data as well as a five day forecast. Created with HTML, CSS, Javascript, jQuery, Bootstrap and
                                                AJAX API calls." siteLink="https://trojanface.github.io/weatherdashboard/" repoLink="https://github.com/trojanface/weatherdashboard" />

                            <ProjectCard image="./assets/kicksU.png" alt="Kicks United" title="Kicks United" description="A full-stack application simulating an online shoe store. Sign-up new users, login and logout user
                                                    sessions and add & remove items from the cart. Created with HTML, CSS, Javascript, jQuery, Bootstrap,
                                                    mySQL, node.js, npm, sequelize, passport, bcrypt and
                                                    AJAX API calls." siteLink="https://kicksunited.herokuapp.com/" repoLink="https://github.com/bhamann-collab/shop" />
                        </div>
                    </div>
                </div>
                <Contact />
            </div>

        </div>
    )
}
