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
    <div>
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
      <button onClick={handleClickSave}>Save and Close</button>
      <button onClick={onClose}>Close without Save</button>
      <button onClick={handleClickClear}>Clear</button>
    </div>
  )
}

export default EditProfile