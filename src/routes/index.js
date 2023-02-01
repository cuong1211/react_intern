import Home from "~/pages/Home";
import Add from "~/pages/Add";
import Order from "~/pages/Order";


const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/add", element: <Add /> },
    { path: "/Order", element: <Order /> },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }