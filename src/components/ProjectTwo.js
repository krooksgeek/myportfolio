import React from "react";
import "./Projects.css"



const ColoredLine = ({ color }) => (
  <hr
      style={{
          backgroundColor: color,
          height: 0.1,
          opacity: 0.4,
          marginLeft:80,
          marginRight:80
      }}
  />
);


function ProjectTwo() {
  return (
    <div className="airline-booking">
      <div class="projectPage">
        <div className="proTitle">
          <div className="smallTitle">
            <span id="sTitle">Full Stack</span>
          </div>
          <span id="pTitle">Airline Management System</span>
        </div>
        <div>
          <div className="proImage"></div>
          <img className="proImg" src="/img/Image_11.png"></img>
        </div>

        <div className="proDesc">
          <div>
          <span>Airline Management System which provides a platform to manage ticket booking, 
track flight status, manage customer and Employee accounts.  Take feedback and record 
complaints, and management of companys' resources. </span>
</div>
        </div>


        <div className="proDate">
          <span id="title">Project Date</span>
          <span id="date">Oct 2020</span>
        </div>

      <ColoredLine color="white"/>

      <div className="role">
        <span id="roleName">Role</span>
        <div className="txt">
          <span id="roleDesc">My role was to specify the project scope and objective and further prepare the system requirement specification. Then work on a development phase selecting the model description. Creating the prototype and the first design.
          Later the project was updated to handle SQL injection, Cross Site Scripting and Web parameter tampering.
           </span>
           </div>
        </div>

        <div className="research">
        <span id="resName">Research & Planning</span>
        <div className="txt">
          <span id="resDesc">
          The research phase is very important for any project. I started by asking a few questions about the project like target audience, styling, competitors, inspirational websites like QATAR AIRLNIES and DELTA AIRLINES, etc. After defining a user and problem statement, I started researching and creating the SRS for the project.
            <br/>
            Preparing the objective, purpose, scope and the software requirement specification Gather out all the requiremnet that are functional and nonfunctional
          based on the project.</span>
          </div>
        </div>

        <div className="className">
        <span id="className">Class Diagram</span>
          <span id="classDesc">
          <img className='cimage' src='/img/cimage.jpg'></img>
          </span>
        </div>

        <div className="homeName">
        <span id="homeName"> Wireframes: Home</span>
          <span id="homeDesc">
          <img className='himage' src='/img/Image_11.png'></img>
          </span>
        </div>

        <div className="sumDesc">
          <span>It was a fun project to work on. There were almost no constraints. </span>
        </div>
      </div>
      
    </div>
  );
}

export default ProjectTwo;