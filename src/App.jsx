import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { Suspense } from 'react';

const AdminSignIn = React.lazy(() => import('./pages/AdminSignIn'))
const TacherSignIn = React.lazy(() => import('./pages/TacherSignIn'))
const Profile = React.lazy(() => import('./pages/Profile'))
const Header = React.lazy(() => import('./components/Header'))
const PrivateRoute = React.lazy(() => import('./components/PrivateRoute'))
import Dashboard from './pages/Dashboard'
import BioData from './pages/BioData';
import Loader from './components/Loader'
import Co_Schoolastic from './pages/Co_Schoolastic';
import CreateClass from './pages/CreateClass';
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path='/admin' element={<AdminSignIn />} />
          <Route path='/biodata' element={<BioData />} />
          <Route path='/co-schoolastic' element={<Co_Schoolastic />} />
          <Route path='/create-class' element={<CreateClass />} />
          <Route path='/' element={<TacherSignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
