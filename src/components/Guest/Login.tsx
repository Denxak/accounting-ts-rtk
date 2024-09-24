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
        <div>
            <label>Login:
                <input
                    onChange={e => setLogin(e.target.value)}
                    value={login}
                    type="text"
                />
            </label>
            <label>Password:
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                />
            </label>
            <button onClick={handleClickLogin}>
                Login
            </button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default Login