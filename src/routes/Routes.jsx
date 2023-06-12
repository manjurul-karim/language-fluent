import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import DashBoard from "../Layout/DashBoard";
import PrivetRoute from "./PrivetRoute";
import SelectedCourse from "../pages/Dashboard/StudentDashboard/SelectedCourse/SelectedCourse";
import Payment from "../pages/Dashboard/StudentDashboard/Payment/Payment";

import AllUser from "../pages/Dashboard/AdminDashboard/AllUser/AllUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashBoard></DashBoard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "selectedcourse",
        element: <SelectedCourse></SelectedCourse>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "alluser",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);
