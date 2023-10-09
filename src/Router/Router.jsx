import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import PopularBike from "../pages/PopularBike/PopularBike";
import Assesories from "../pages/Assesories/Assesories";
import About from "../pages/About/About";
import Services from "../components/Services/Services";
import Details from "../pages/Details/Details";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import PrivateRoute from "./PrivateRoute";


const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p className="text-center h-[50vh]">Page not find</p>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('/bike.json'),
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/popularbikes",
          element: <PrivateRoute><PopularBike></PopularBike></PrivateRoute>,
          loader: () => fetch('/bike.json'),
        },
        {
        path: "/assesories",
          element: <Assesories></Assesories>,
          loader: () => fetch('/assesories.json'),
        },
        {
          path: "/services",
          element: <Services></Services>,
          loader: () => fetch('/bike.json')
        },
        {
          path: "/bike/:id",
          element: <Details></Details>,
          loader: () => fetch('/bike.json')
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>
        },
        {
          path: "/signup",
          element: <SignupPage></SignupPage>
        },
      ],
    },
]);

export default myCreatedRoute;