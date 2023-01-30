import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from '~/routes';
import { useState } from "react";
import { DefaultLayout } from "~/components/Layout";
import useToken from "~/components/Layout/components/Api/useToken";
import Login from "./pages/Login";
import Modal from "~/components/Layout/components/Modal";
import useModal from "~/components/Layout/components/Modal/useModal";

function App() {
  const { token, setToken } = useToken();
  const { isShowing, toggle } = useModal();
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
                  <button onClick={toggle}>Open Modal</button>
                  <Modal
                    isShowing={isShowing}
                    hide={toggle}
                  />
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
