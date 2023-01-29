import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from '~/routes';
import { useState } from "react";
import { DefaultLayout } from "~/components/Layout";
import Login from "./pages/Login";
function App() {

  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route) => {
            const Layout = route.layout || DefaultLayout;
            if (route.layout === false) {
              return (
                <Route key={route.path} path={route.path} element={route.element} />
              );
            }
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  {route.element}
                </Layout>
              } />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
