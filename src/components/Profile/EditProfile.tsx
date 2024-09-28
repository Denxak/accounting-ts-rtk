import { useState } from "react";
import { OnCloseProps } from "../../utils/types";
import { useAppDispatch } from "../../app/hooks";
import { updateUser } from "../../features/api/accountApi";

const EditProfile = ({onClose}:OnCloseProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useAppDispatch();

  const handleClickClear = () => {
    setFirstName('');
    setLastName('');
  }

  const handleClickSave = () => {
    dispatch(updateUser({firstName, lastName}));
    onClose();
  }

  return (
    <div className="bg-whitesmoke p-6 rounded shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">First name:</label>
        <input
          className="border border-gray-300 rounded w-full py-2 px-3"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Last name:</label>
        <input
          className="border border-gray-300 rounded w-full py-2 px-3"
          onChange={e => setLastName(e.target.value)}
          value={lastName}
          type="text" />
      </div>
      <div className="space-x-2">
        <button className="mt-4 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded transition duration-300" onClick={handleClickSave}>Save and Close</button>
        <button className="mt-2 px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded transition duration-300" onClick={onClose}>Close without Save</button>
        <button className="border border-gray-400 rounded py-2 px-4 text-gray-700 hover:bg-gray-100" onClick={handleClickClear}>Clear</button>
      </div>
    </div>
  )
}

export default EditProfile