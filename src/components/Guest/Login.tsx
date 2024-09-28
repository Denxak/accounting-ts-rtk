import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { fetchUser } from '../../features/api/accountApi';
import { createToken } from '../../utils/constants';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
    }

    const handleClickLogin = () => {
        dispatch(fetchUser(createToken(login, password)))
    }

    return (
        <div className="flex flex-col space-y-4">
            <label className="text-gray-700">Login:
                <input
                    className="border border-gray-300 rounded px-2 py-1 mt-1 w-full"
                    onChange={e => setLogin(e.target.value)}
                    value={login}
                    type="text"
                />
            </label>
            <label className="text-gray-700">Password:
                <input
                    className="border border-gray-300 rounded px-2 py-1 mt-1 w-full"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                />
            </label>
            <div className="mt-4 space-y-2"> 
                <button
                    className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300"
                    onClick={handleClickLogin}>
                    Login
                </button>
                <button
                    className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition duration-300"
                    onClick={handleClickClear}>
                    Clear
                </button>
            </div>
        </div>
    )
}

export default Login