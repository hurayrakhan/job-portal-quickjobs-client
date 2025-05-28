import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <HomePage></HomePage>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);

export default router;