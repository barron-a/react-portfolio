import React, {useState} from 'react';

function Project({ currentProject }) {

    //const { name, description } = currentProject;

    const [projects] = useState([
        {
            name: "Getaway",
            deployed: "https://barron-a.github.io/getaway/",
            github: "https://github.com/barron-a/getaway"
        },
        {
            name: "Day Spa",
            deployed: "https://dry-mountain-60898.herokuapp.com/",
            github: "https://github.com/natashamullin/we_are_back"
        },
        {
            name: "Tech Blog",
            deployed: "https://hidden-atoll-13402.herokuapp.com/",
            github: "https://github.com/barron-a/tech-blog"
        },
        {
            name: "Work Day Scheduler",
            deployed: "https://barron-a.github.io/work-day-scheduler/",
            github: "https://github.com/barron-a/work-day-scheduler"
        },
        {
            name: "Weather Dashboard",
            deployed: "https://barron-a.github.io/weather-dashboard/",
            github: "https://github.com/barron-a/weather-dashboard"
        },
        {
            name: "Notetaker",
            deployed: "https://young-brook-05816.herokuapp.com/",
            github: "https://github.com/barron-a/note-taker"
        }
    ])

    return (
        <div className="container">
            <div className="row">
                {projects.map((project, i) => (
                    <img
                        src={require(`../../assets/project-images/${i}.png`).default}
                        alt={project.name}
                        key={project.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Project;