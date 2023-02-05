import Home from "~/pages/Home";
import Order from "~/pages/Order";
import routes from "~/config/routes";


const publicRoutes = [
    { path: routes.home, element: <Home />,name: "Home"},
    { path: routes.order, element: <Order /> ,name: "Order"},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }