import React from "react"
import "./ProjectCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSadCry } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({ img, name, description, link, icon, stack }) => (
  <div>
    <div className="project-box">
      <div className="row">
        <div className="col-sm-4">
          <img
            src={img}
            id="project-img"
            alt=""
          />
        </div>
        <div className="col-sm-8">
          <p className="bold">
            {name} <FontAwesomeIcon icon={faSadCry} />
          </p>
          <p>
            {description}
          </p>
          <p>
            <b>Stack: </b> <span style={{color: "red",}}>{stack}</span>
          </p>
          <a href={link} target= "_blank">View Live Demo</a>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard
