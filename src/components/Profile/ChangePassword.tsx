import { useState } from "react";
import { OnCloseProps } from "../../utils/types";
import { useAppDispatch } from "../../app/hooks";
import { changePassword } from "../../features/api/accountApi";

const ChangePassword = ({ onClose }: OnCloseProps) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setRepeatPassword('');
    }

    const handleClickSave = () => {
        if (newPassword === repeatPassword) {
            dispatch(changePassword([newPassword, oldPassword]));
            onClose();
        } else {
            alert("New password and repeat password are different");
        }
    }

    return (
        <div>
            <label>Old password:
                <input
                    onChange={e => setOldPassword(e.target.value)}
                    value={oldPassword}
                    type="password"
                />
            </label>
            <label>New password:
                <input
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword}
                    type="password"
                />
            </label>
            <label>Repeat new password:
                <input
                    onChange={e => setRepeatPassword(e.target.value)}
                    value={repeatPassword}
                    type="password" />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={onClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default ChangePassword