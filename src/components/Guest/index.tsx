import { useState } from 'react'
import Register from './Register'
import Login from './Login'

const Guest = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div>
            {isLogin ? <Login /> : <Register />}
            <button onClick={() => setIsLogin(prevState => !prevState)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    )
}

export default Guest