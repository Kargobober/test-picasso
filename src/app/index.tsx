import { useEffect } from 'react';
import './index.css';
import { withProviders } from 'app/providers';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';
import { NAME_FOR_404 } from 'shared/router';
import BaseLayout from './layouts/BaseLayout';
import { HomePage } from 'pages/home';
import { CardPage } from 'pages/card';
import { NotFound404Page } from 'pages/notFound404';
import { REPONAME } from 'shared/config/constants';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && location.pathname === `/${REPONAME}`) navigate('/');
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path=':id' element={<CardPage />} />

          <Route path='*' element={<Navigate to={`/${NAME_FOR_404}`} />} />
        </Route>

        <Route path={NAME_FOR_404} element={<NotFound404Page />} />
      </Routes>
    </div>
  );
};

export default withProviders(App);
