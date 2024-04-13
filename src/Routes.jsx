import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HeroSectionfixed from "pages/HeroSectionfixed";
import LogIn from "pages/LogIn/LogIn";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HeroSectionfixed /> },
    { path: "*", element: <NotFound /> },
    {
      path: "herosectionfixed",
      element: <HeroSectionfixed />,
    },
    {
      path: "login",
      element: <LogIn />, 
    }
  ]);

  return element;
};

export default ProjectRoutes;
