import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { login as loginService } from '../services/authService'
import Header from '../components/Header'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const nav = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await loginService({ email, password })
      login(data.token, data.user)
      nav('/dashboard')
    } catch (err) {
      setError(err.response?.data || 'Login failed')
    }
  }

  return (
    <>
    <Header></Header>
    <div className="container py-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3 text-center">
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
    </>
  )
}

export default LoginPage;
