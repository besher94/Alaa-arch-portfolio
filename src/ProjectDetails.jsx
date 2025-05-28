import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projectsData from "./data/projectsData";

// استيراد اللايت بوكس
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.projectId === projectId);

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <p>Project not found</p>;

  // نحول الصور لصيغة تقبلها المكتبة
  const slides = project.images.map((img) => ({ src: img }));

  return (
    <main className="project-details-main">
      <h1>{project.title}</h1>
      <p className="description">{project.description}</p>
      <div className="details-grid">
        {project.images.map((img, index) => (
          <div
            key={index}
            className="project-details-images"
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
            style={{ cursor: "pointer" }}
          >
            <img src={img} alt={`project-${index}`} />
          </div>
        ))}
      </div>

      {/* عرض اللايت بوكس */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={photoIndex}
        on={{
          view: ({ index }) => setPhotoIndex(index),
        }}
      />
    </main>
  );
};

export default ProjectDetails;
