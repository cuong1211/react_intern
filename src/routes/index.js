import Home from "~/pages/Home";
import User from "~/pages/User";

const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/User", element: <User /> },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }