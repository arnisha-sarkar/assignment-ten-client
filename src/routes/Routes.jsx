import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyListings from "../pages/MyListings";
import BrowsCars from "../pages/BrowsCars";
import MyBookings from "../pages/MyBookings";
import UpdateCar from "../pages/UpdateCar";
import FeaturedCars from "../pages/FeaturedCars";
import CarDetails from "../pages/CarDetails";
import Privacy from "../pages/privacy";
import Terms from "../pages/terms";
import Contact from "../pages/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import AddCar from "../pages/AddCar";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("https://car-site-fawn.vercel.app/newest-cars"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/addCar",
      //   element: (
      //     <PrivateRoute>
      //       <AddCar />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/listings",
      //   element: (
      //     <PrivateRoute>
      //       <MyListings />
      //     </PrivateRoute>
      //   ),
      //   loader: () => fetch("https://car-site-fawn.vercel.app/cars"),
      // },
      // {
      //   path: "/brows",
      //   element: <BrowsCars />,
      // },
      // {
      //   path: "/booking",
      //   element: (
      //     <PrivateRoute>
      //       <MyBookings />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/update/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpdateCar />
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`https://car-site-fawn.vercel.app/cars/${params.id}`),
      // },
      {
        path: "/featured/:id",
        element: <FeaturedCars />,
        loader: ({ params }) =>
          fetch(`https://car-site-fawn.vercel.app/newest-cars/${params.id}`),
      },
      // {
      //   path: "/car-details/:id",
      //   element: (
      //     <PrivateRoute>
      //       <CarDetails />
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`https://car-site-fawn.vercel.app/cars/${params.id}`),
      // },
      // {
      //   path: "/booking",
      //   element: (
      //     <PrivateRoute>
      //       <BookNow />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "addCar",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
        loader: () => fetch("https://car-site-fawn.vercel.app/cars"),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdateCar />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://car-site-fawn.vercel.app/cars/${params.id}`),
      },
      {
        path: "brows",
        element: <BrowsCars />,
      },
      {
        path: "car-details/:id",
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://car-site-fawn.vercel.app/cars/${params.id}`),
      },
      {
        path: "booking",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
