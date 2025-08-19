import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(null)

  const login = (token, user) => {
    localStorage.setItem('token', token)
    setAuthToken(token)
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setAuthToken(null)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setAuthToken(token)
  }, [])

  return (
    <AuthContext.Provider value={{ authToken, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}
