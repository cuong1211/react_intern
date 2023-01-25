import Home from "~/pages/Home";
import Add from "~/pages/Add";
import Edit from "~/pages/Edit";


const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/add", element: <Add /> },
    { path: "/edit", element: <Edit /> },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }