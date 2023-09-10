import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    // Sample project data (you can replace this with your actual project data)
    const projectsData = [
      {
        title: 'Automatic Toilet Flusher',
        description: 'The place most of us like to see a hands-free toilet flusher is in public washrooms. It will be a welcome convenience – no-one wants to touch a public toilet! In this COVID-19 pandemic touching the flush button in a public toilet is risky also and can be a cause of infection. But do you know you can make an automatic flusher for your toilets in your home?',
        imageUrl: 'https://www.uk.roca.com/rocalife/wp-content/uploads/2020/09/EM1_Beyond_Mecanismo.jpg',
        projectLink: 'https://www.instructables.com/Automatic-Toilet-Flusher-reduce-Touch-Reduce-COVID/',
      },
      {
        title: 'Smart Road Transportation System',
        description: 'Various countries throughout the world have started their efforts in designing and implementing smart cities. China alone has over 300 smart city projects, with strong participation by industries and government offices. India too have allocated trillions in budget to build over 100 smart cities. An essential part of a smart city is transport. In this paper, we will discuss the current state, developments, and some of the emerging advances in transportation technologies and how these advances in smart roads will prepare the society towards the realization of future smart cities.',
        imageUrl: 'https://assets.weforum.org/project/image/MPn0I_9Tq4SsyzBtJh6C3KSSJ3wbs7cVLWhMqL_s-0o.jpeg',
        projectLink: 'https://royalsocietypublishing.org/doi/10.1098/rspa.2019.0439',
      },
    ];
  
    return (
      <div className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Projects;
