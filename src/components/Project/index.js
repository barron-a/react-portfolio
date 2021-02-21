import React from 'react';
import photo from '../../assets/cover/cover-image.jpg';

function Project(props) {
    const currentProject = {
        name: "about",
        description: "about me section"
    }
    return (
        <section>
            <h1>{currentProject.name}</h1>
            <p>currentProject.name</p>
            <div>
                <img src={photo} alt="Project Example" />
            </div>
        </section>
    );
}

export default Project;