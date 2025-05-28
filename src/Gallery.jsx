import "./Gallery.css";
import projectsData from "./data/projectsData";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ما تقسم المشاريع ب slice لأن أرقامك مو متناسقة
  // الأفضل تصنفهم حسب projectId أو title مباشرة إذا بدك
  // أو على حسب مشروعك الجديد حددهم يدوياً

  // مثلاً لو بدك تعرض كل المشاريع كل وحده مع صورها:

  return (
    <>
      <main className="gallery-main">
        <div className="head-flex">
          <h1>MY PROJECTS</h1>
          <p>A selection of works in design, creativity, and architecture</p>
        </div>

        {projectsData.map((project) => (
          <section key={project.id}>
            <h1>{project.title}</h1>
            <div className="projects-div">
              {project.images.map((img, index) => (
                <Link
                  key={index}
                  to={`/Gallery/${project.projectId}`}
                  className="project-card"
                  style={{ "--i": index }}
                >
                  <img
                    className="home-projects"
                    src={img}
                    alt={`${project.title} image ${index + 1}`}
                  />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Gallery;
