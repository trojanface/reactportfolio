import React from 'react'

export default function Contact() {
    return (
        <div id="contactMe" className="hideme img-thumbnail rounded mx-auto d-block largeMarg row">
            <div className="offset-lg-1"></div>

            <div className="px-0 col-lg-10 alignC">
                <h5>Get in touch - matthewjteague@outlook.com</h5>
                <a href="mailto:matthewjteague@outlook.com?subject='Profile Enquiry'&body="
                    className="mattsButton btn btn-primary mt-4 hvr-bob bubble">Get in touch</a>
            </div>
        </div>
    )
}
