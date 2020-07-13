import React from 'react'

export default function ProjectCard(props) {
    return (
        <div className="row my-5">
        <div className="col-lg-6 mb-3">
            <img src={require(`${props.image}`)} alt={props.alt} className="img-thumbnail rounded mx-auto d-block"/>
</div>
            <div className="col-lg-6">
                <h3>{props.title}</h3>
                <p>{props.description}
</p>
                <a className="mattsButton buzz-out-on-hover" href={props.siteLink}
                    target="_blank">View Site</a>
                <a className="mattsButton buzz-out-on-hover" href={props.repoLink}
                    target="_blank">View Repo</a>
            </div>

        </div>
    )
}
