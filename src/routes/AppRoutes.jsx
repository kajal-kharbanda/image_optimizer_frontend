import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Dashboard from '../pages/DashBoard'
import ResizeImage from '../pages/ResizeImage'
import ConvertImage from '../pages/ConvertImage'
import CompressImage from '../pages/CompressImage'
import Crop from '../pages/Crop'
import AboutSection from '../pages/about'
import UserOperations from '../pages/SeeList'

const AppRoutes = () => {
  const { authToken } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={authToken ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
         <Route
          path="/home"
          element={authToken ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={authToken ? <Navigate to="/dashboard" /> : <RegisterPage />}
        />
        <Route
          path="/dashboard"
          element={authToken ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/resize"
          element={authToken ? <ResizeImage /> : <Navigate to="/" />}
        />
        <Route
          path="/convert"
          element={authToken ? <ConvertImage /> : <Navigate to="/" />}
        />
        <Route
          path="/compress"
          element={authToken ? <CompressImage /> : <Navigate to="/" />}
        />
        <Route
          path="/crop"
          element={authToken ? <Crop /> : <Navigate to="/" />}
        />
        <Route
          path="/seeList"
          element={authToken? <UserOperations/> : <Navigate to="/" />}
        />
         <Route
          path="/about"
          element={authToken ? <AboutSection/> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
