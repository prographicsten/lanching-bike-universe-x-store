import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import NewBike from "../pages/NewBike/NewBike";
import PopularBike from "../pages/PopularBike/PopularBike";
import Assesories from "../pages/Assesories/Assesories";
import About from "../pages/About/About";
import Services from "../components/Services/Services";
import Details from "../pages/Details/Details";


const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>Page not find</p>,
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
          path: "/newbikes",
          element: <NewBike></NewBike>
        },
        {
          path: "/popularbikes",
          element: <PopularBike></PopularBike>
        },
        {
          path: "/assesories",
          element: <Assesories></Assesories>
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
        }
      ],
    },
]);

export default myCreatedRoute;