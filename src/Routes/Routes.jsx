import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ServicesMain from "../Pages/Services/ServicesMain";
import ProjectSection from "../Pages/Projects/ProjectSection";
import TrainingSection from "../Pages/Training/TrainingSection";
import ProductCard from "../Pages/ProdcutCard/ProductCard";
import AboutSection from "../Pages/Company/AboutSection";
import ContactPage from "../Pages/Contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'products',
        element:<ProductCard></ProductCard>
      },
      {
        path:'services',
        element:<ServicesMain></ServicesMain>
      },
      {
        path:'projects',
        element:<ProjectSection></ProjectSection>
      },
      {
        path:'company',
        element:<AboutSection></AboutSection>
      },
      {
        path:'contact',
        element:<ContactPage></ContactPage>
      },
      {
        path:'training',
        element:<TrainingSection></TrainingSection>
      }
    ]


  },
]);
