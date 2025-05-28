import AccordionItem from "./AccordionItem";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="about-main">
        <div className="img-flex-main">
          <h1>ABOUT ME</h1>
          <img
            className="about-img"
            src="src/assets/472830124_922335293433875_805654312278734770_n.jpg"
            alt=""
          />
        </div>
        <div className="main-content-about">
          <h2>🎓 Education</h2>
          <p>
            Bachelor of Science in Architecture (2017–2022)
            <br />
            EPU – EPLA Private University
            <br />
            Rating: Very Good
          </p>

          <h2>💻 Softwares</h2>
          <ul>
            <li>
              <strong className="s">Excellent at:</strong> AutoCAD, Rhinoceros,
              3Ds Max, Corona, Lumion, Photoshop
            </li>
            <li>
              <strong className="s">Very good at:</strong> Revit
            </li>
          </ul>
          <h2>🛠️ Key Skills</h2>
          <ul>
            <li>
              Strong understanding of design principles and space planning
            </li>
            <li>3D visualization & cinematic animation</li>
            <li>Excellent communication and interpersonal skills</li>
            <li>Ability to manage multiple projects simultaneously</li>
            <li>Excellent English</li>
            <li>Presentation, layout, and mood boards</li>
            <li>
              {" "}
              Proficient in: AutoCAD, Rhinoceros, 3Ds Max, Corona, Lumion,
              Photoshop
            </li>
          </ul>
          <h2>🌍 Languages</h2>
          <p>
            Arabic – Mother tongue
            <br />
            English – Advanced
          </p>

          <section className="about">
            <h2>Work Experience</h2>

            <AccordionItem title="Interior Designer @ Antranik Der Boghassian Architects 2023-2024 (Beirut)">
              <ul>
                <li>
                  Collaborate with clients to understand design preferences and
                  requirements
                </li>
                <li>
                  Create detailed design plans, including floor plans,
                  elevations, and 3D renderings
                </li>
                <li>
                  Source and select furniture, fixtures, and materials for
                  projects
                </li>
                <li>
                  Manage project budgets and timelines to ensure successful
                  completion
                </li>
                <li>
                  Design multiple residential and commercial projects in Dubai
                </li>
                <li>
                  Participate in large design competitions in the Gulf region
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Architect @ Awtad El Bnyan 2022-2023 (Riyadh, Remote)">
              <ul>
                <li>Conceptualize and develop project ideas </li>
                <li>Research and incorporate artistic elements into designs</li>
                <li>
                  Participate actively in design processes and presentations
                </li>
                <li>Perform BIM modeling for design documentation</li>
                <li>Produce high-quality 2D graphics and 3D visuals</li>
                <li>Receive and implement design changes</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Junior Interior Designer @ Aboshaar Kitchens 2021-2022 (Aleppo)">
              <ul>
                <li>Participate in fit-out and installation processes </li>
                <li>Conduct research on latest design trends and materials</li>
                <li>Prepare design documentation and specifications</li>
                <li>Manage project coordination with vendors and suppliers</li>
              </ul>
            </AccordionItem>
          </section>

          <h2>🔗 Platforms</h2>
          <p>
            <a
              id="platform"
              href="https://www.linkedin.com/in/alaadin-abo-shaar0-b0437227"
              target="_blank"
              rel="noopener noreferrer"
            >
              @LinkedIn Profile
            </a>
          </p>

          <h2>📄 References</h2>
          <p>Available upon request.</p>
        </div>
      </main>
    </>
  );
};

export default About;
