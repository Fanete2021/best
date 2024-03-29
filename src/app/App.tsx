import React, { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInitied, userActions } from 'entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const initied = useSelector(getUserInitied);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [ dispatch ]);

  return (
    <div className={classNames('app', {}, [ theme ])}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />
          {initied && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;