import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import AddCar from "../pages/AddCar";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyListings from "../pages/MyListings";
import BrowsCars from "../pages/BrowsCars";
import MyBookings from "../pages/MyBookings";
import UpdateCar from "../pages/UpdateCar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/addCar",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/cars"),
      },
      {
        path: "/brows",
        element: <BrowsCars />,
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateCar />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/cars/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);
