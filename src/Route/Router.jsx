import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUser from "../AdminPages/AllUser/AllUser";
import AddItems from "../AdminPages/AddItems/AddItems";
import PrivateRouteAdmin from '../Pages/Home/PrivateRoute/PrivateRouteAdmin'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },

    // Admin
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // Admin Routes
            {
                path: 'users',
                element: <PrivateRouteAdmin>
                    <AllUser></AllUser>
                </PrivateRouteAdmin>
            },
            {
                path: 'add-items',
                element: <PrivateRouteAdmin>
                    <AddItems></AddItems>
                </PrivateRouteAdmin>
            },
        ]
    }
]);