import Home from "~/pages/Home";
import Add from "~/pages/Add";
import Order from "~/pages/Order";
import Login from "~/pages/Login";


const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/add", element: <Add /> },
    { path: "/Order", element: <Order /> },
    // { path: "/login", element: <Login />, layout: false },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }