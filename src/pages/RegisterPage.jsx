import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { registerService } from '../services/authService'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useContext(AuthContext)
  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      //  await registerService({ email, password, confirmPassword })
      // auto-login
      console.log(email,password,confirmPassword);
      const { data } = await registerService({ email, password, confirmPassword })
      console.log(data);
      login(data.token)
      nav('/dashboard')
    } catch (err) {
      setError('Registration failed')
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4">Register</h2>
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
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100">Register</button>
      </form>
      <p className="mt-3 text-center">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  )
}

export default RegisterPage;
