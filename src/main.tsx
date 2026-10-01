import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PlanningApprovals from "./pages/PlanningApprovals";
import JointVentures from "./pages/JointVentures";
import Construction from "./pages/Construction";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import NotFound from "./pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/planning-approvals" element={<PlanningApprovals />} />
          <Route path="services/joint-ventures" element={<JointVentures />} />
          <Route path="services/construction" element={<Construction />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
