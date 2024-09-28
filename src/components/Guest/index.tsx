import { useState } from 'react'
import Register from './Register'
import Login from './Login'
import { useAppDispatch } from '../../app/hooks'
import { clearError } from '../../features/slices/tokenSlice'; 

const Guest = () => {
    const [isLogin, setIsLogin] = useState(true)
    const dispatch = useAppDispatch();

    const handleSwitch = () => {
        dispatch(clearError());
        setIsLogin(prevState => !prevState);
    };

    return (
        <div className="bg-whitesmoke min-h-screen flex flex-col items-center justify-center">
            <div className="p-4 border border-gray-300 rounded shadow-md bg-white">
                {isLogin ? <Login /> : <Register />}
                <button 
                    onClick={handleSwitch} 
                    className="mt-4 w-full px-4 py-2 text-gray-700 border border-gray-400 rounded hover:bg-gray-100 transition duration-300 text-center"
                >
                    Switch to {isLogin ? 'Register' : 'Login'}
                </button>
            </div>
        </div>
    )
}

export default Guest