import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <PrivateRouter><HomePage></HomePage></PrivateRouter>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);

export default router;