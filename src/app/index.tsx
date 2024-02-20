import React from 'react';
import './index.css';
import { withProviders } from 'app/providers';
import { Navigate, Route, Routes } from 'react-router';
import { NAME_FOR_404 } from 'shared/router';
import HomePage from 'pages/home/HomePage';
import CardPage from 'pages/card/CardPage';
import NotFound404Page from 'pages/notFound404/NotFound404Page';
import BaseLayout from './layouts/BaseLayout';

const App = () => {
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
