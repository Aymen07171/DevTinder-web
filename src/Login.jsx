import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from './Utils/constants'

const Login = () => {
    const [emailId, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState('')
    const dispatch = useDispatch()    
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const endpoint = isLogin ? '/login' : '/signup'
            const userData = isLogin 
                ? { emailId, password }
                : { emailId, password, firstName, lastName }

            const res = await axios.post(
                `${BASE_URL}${endpoint}`,
                userData,
                { withCredentials: true }
            )

            if (res.status === 200 || res.status === 201) {
                const userData = {
                    ...res.data.user,
                    isAuthenticated: true
                }
                
                // Store user data in Redux
                dispatch({ type: 'user/addUser', payload: userData })

                // Store token if provided
                if (res.data.token) {
                    localStorage.setItem('authToken', res.data.token)
                    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
                }

                navigate('/feed')
            }
        } catch (error) {
            setError(error?.response?.data?.message || 'Authentication failed')
            console.error('Auth failed:', error)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center mb-4">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </h2>
                    
                    {!isLogin && (
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type your first name"
                                className="input input-bordered"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                required={!isLogin}
                            />

                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type your last name"
                                className="input input-bordered"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            value={emailId}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && (
                        <div className="text-error text-sm mt-2">
                            {error}
                        </div>
                    )}

                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </div>

                    <p 
                        className="text-center mt-4 cursor-pointer hover:underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin 
                            ? "New user? Sign up here" 
                            : "Already have an account? Login"}
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login