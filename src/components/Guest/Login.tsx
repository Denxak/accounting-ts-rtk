import { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
    }

    const handleClickLogin = () => {
        // TODO Register of user
        alert("Register");
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