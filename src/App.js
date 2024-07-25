import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { publicRoutes } from './routes';
import Home from '~/pages/Home';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              let Layout = route.layout;

              if (Layout === null)
                Layout = Fragment;
              else if (Layout === undefined) Layout = DefaultLayout;

              return (
                <Route key={index} path={route.path} element={<Layout><route.component
                  props={route.props === undefined ? {} : route.props}
                  videos={route.videos} />
                </Layout>} />)
            })
          }
          <Route path="*" element={<DefaultLayout><Home /></DefaultLayout>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
