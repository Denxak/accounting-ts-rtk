import { useState } from "react"

const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const handleClickRegister = () => {
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
            <label>First name:
                <input
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                />
            </label>
            <label>Last name:
                <input
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    type="text" />
            </label>
            <button onClick={handleClickRegister}>
                Register
            </button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default Register