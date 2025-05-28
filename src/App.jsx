import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Footer";
import Gallery from "./Gallery";

import ProjectDetails from "./ProjectDetails";
function App() {
  return (
    <Router>
      <div className="content">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route
            path="/Gallery/:projectId"
            element={<ProjectDetails></ProjectDetails>}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
