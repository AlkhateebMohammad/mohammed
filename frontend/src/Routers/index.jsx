import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home";
import Login from "../pages/login";
import Regester from "../pages/regester";
import ContactUs from "../pages/contactUs";
import Clinics from "../pages/clinics";
import InfoClinic from "../pages/infoClinic.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Regester />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "allClinics",
        element: <Clinics />,
      },
      {
        path: "infoClinic/:id",
        element: <InfoClinic />,

      },
    ],
  },
]);
