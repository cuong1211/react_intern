import Home from "~/pages/Home";
import Order from "~/pages/Order";


const publicRoutes = [
    { path: "/", element: <Home />,name: "Home"},
    { path: "/Order", element: <Order /> ,name: "Order"},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }