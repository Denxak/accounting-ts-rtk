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
        <div className="bg-whitesmoke p-6 rounded shadow-lg">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold">Old password:</label>
                <input
                    className="border border-gray-300 rounded w-full py-2 px-3"
                    onChange={e => setOldPassword(e.target.value)}
                    value={oldPassword}
                    type="password"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold">New password:</label>
                <input
                    className="border border-gray-300 rounded w-full py-2 px-3"
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword}
                    type="password"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold">Repeat new password:</label>
                <input
                    className="border border-gray-300 rounded w-full py-2 px-3"
                    onChange={e => setRepeatPassword(e.target.value)}
                    value={repeatPassword}
                    type="password"
                />
            </div>
            <div className="space-x-2">
                <button className="mt-4 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded transition duration-300" onClick={handleClickSave}>Save and Close</button>
                <button className="mt-2 px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded transition duration-300" onClick={onClose}>Close without Save</button>
                <button className="border border-gray-400 rounded py-2 px-4 text-gray-700 hover:bg-gray-100" onClick={handleClickClear}>Clear</button>
            </div>
        </div>
    )
}

export default ChangePassword