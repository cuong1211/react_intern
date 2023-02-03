import Home from "~/pages/Home";
import Add from "~/pages/Add";
import Order from "~/pages/Order";
import Test from "~/pages/test";


const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/add", element: <Add /> },
    { path: "/Order", element: <Order /> },
    { path: "/test", element: <Test /> },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }