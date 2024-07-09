import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main  style={{ maxWidth: '400px', height: 'auto', margin:'auto', backgroundColor:'#ffffffa0', borderRadius:'10px', padding:'20px', boxShadow:'0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)' }} className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                style={{
                                    width: '90%',
                                    padding: '0.75rem',
                                    color: '#6B7280',
                                    backgroundColor: 'transparent',
                                    outline: 'none',
                                    border: '1px solid',
                                    borderColor: 'rgba(66, 153, 225, 0.5)',
                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '0.375rem',
                                    transition: 'border-color 0.3s ease',
                                }}
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                style={{
                                    width: '90%',
                                    padding: '0.75rem',
                                    color: '#6B7280',
                                    backgroundColor: 'transparent',
                                    outline: 'none',
                                    border: '1px solid',
                                    borderColor: 'rgba(66, 153, 225, 0.5)',
                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '0.375rem',
                                    transition: 'border-color 0.3s ease',
                                }}
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Confirm Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                style={{
                                    width: '90%',
                                    padding: '0.75rem',
                                    color: '#6B7280',
                                    backgroundColor: 'transparent',
                                    outline: 'none',
                                    border: '1px solid',
                                    borderColor: 'rgba(66, 153, 225, 0.5)',
                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '0.375rem',
                                    transition: 'border-color 0.3s ease',
                                }}
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

<br />
                        <button
                            type="submit"
                            disabled={isRegistering}
                            style={{
                                width: '100%',
                                padding: '0.5rem 1rem',
                                color: 'white',
                                fontWeight: '500',
                                borderRadius: '0.375rem',
                                backgroundColor: isRegistering ? '#D1D5DB' : '#2563EB',
                                cursor: isRegistering ? 'not-allowed' : 'pointer',
                                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                            }}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="text-sm text-center">
                            Already have an account? {'   '}
                            <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register