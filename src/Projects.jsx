import projectsData from "./data/projectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  // ناخد كل المشاريع من ملف البيانات (6 مشاريع)
  const selectedProjects = projectsData.slice(0, 6);

  return (
    <>
      <h1 id="p">PROJECTS</h1>
      <div className="projects-div">
        {selectedProjects.map((project, index) => (
          <Link
            className="h-link"
            key={project.id}
            to={`/Gallery/${project.projectId}`}
          >
            <div className="project-card" style={{ "--i": index }}>
              <img
                className="home-projects"
                src={project.images[0]} // أول صورة من مصفوفة الصور
                alt={project.title}
              />
              <h3>{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/Gallery" id="show-projects">
        show full projects
      </Link>
    </>
  );
};

export default Projects;
