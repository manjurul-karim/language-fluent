import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../Components/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'instructor',
            element: <Instructor></Instructor>
        },
        {
            path: 'classes',
            element: <Classes></Classes>
        }
      ]
    },
  ]);