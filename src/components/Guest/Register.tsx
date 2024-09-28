import { KeyboardEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { registerUser } from "../../features/api/accountApi";
import { clearError } from "../../features/slices/tokenSlice";

const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useAppDispatch()
    const error = useAppSelector(state => state.token.error);

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
        dispatch(clearError());
    }

    const handleClickRegister = () => {
        dispatch(registerUser({login, password, firstName, lastName}));
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleClickRegister();
        }
    }
    return (
        <div className="flex flex-col space-y-4">
            <label className="text-gray-700">Login:
                <input
                    className="border border-gray-300 rounded px-2 py-1 mt-1 w-full"
                    onChange={e => setLogin(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={login}
                    type="text"
                />
            </label>
            <label className="text-gray-700">Password:
                <input
                    className="border border-gray-300 rounded px-2 py-1 mt-1 w-full"
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={password}
                    type="password"
                />
            </label>
            <label className="text-gray-700">First name:
                <input
                    className="border border-gray-300 rounded px-2 py-1 mt-1 w-full"
                    onChange={e => setFirstName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={firstName}
                    type="text"
                />
            </label>
            <label className="text-gray-700">Last name:
                <input
                    className="border border-gray-300 rounded px-2 py-1 mt-1 w-full"
                    onChange={e => setLastName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={lastName}
                    type="text"
                />
            </label>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div className="mt-4 space-y-2">
                <button 
                    onClick={handleClickRegister} 
                    className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300"
                >
                    Register
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

export default Register