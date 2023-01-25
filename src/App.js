import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from '~/routes';
import { DefaultLayout } from "~/components/Layout";
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route) => {
            const Layout = route.layout || DefaultLayout;
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
