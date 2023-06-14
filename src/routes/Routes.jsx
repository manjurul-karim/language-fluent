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
import AddClass from "../pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/InstructorDashboard/MyClass/MyClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import ManageClass from "../pages/Dashboard/AdminDashboard/ManageClass/ManageClass";
import UpdateMyClass from "../pages/Dashboard/InstructorDashboard/UpadeMyClass/UpdateMyClass";
import EnrollCourse from "../pages/Dashboard/StudentDashboard/EnrollCourse/EnrollCourse";

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
        path: "/instructor",
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
        element: (
          <StudentRoute>
            <SelectedCourse></SelectedCourse>
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "alluser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
      {
        path: "manageclasses",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "updateclass/:id",
        element: <UpdateMyClass></UpdateMyClass>,
        loader: ({ params }) =>
          fetch(
            `https://a12-languagefluent-server.vercel.app/updatecourse/${params.id}`
          ),
      },
      {
        path: "enrollclass",
        element: <EnrollCourse></EnrollCourse>,
      },
    ],
  },
]);
