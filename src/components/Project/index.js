import React, {useState} from 'react';
import photo from '../../assets/project-images/work-day-scheduler.png';

function Project(props) {
    const currentProject = {
        name: "Work Day Scheduler",
        deployed: "https://barron-a.github.io/work-day-scheduler/",
        github: "https://github.com/barron-a/work-day-scheduler"
    }
    return (
        <section className="container">
            <h1>{currentProject.name}</h1>
            <a href={currentProject.deployed}>Deployed</a>
            <a href={currentProject.github}>GitHub</a>
            <div>
                <img
                    src={photo}
                    alt="Work Day Scheduler Image"
                    className="col-sm"
                />
            </div>
        </section>
    );
}

export default Project;