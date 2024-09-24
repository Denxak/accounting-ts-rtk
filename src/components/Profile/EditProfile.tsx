import { useState } from "react";
import { OnCloseProps } from "../../utils/types";

const EditProfile = ({onClose}:OnCloseProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleClickClear = () => {
    setFirstName('');
    setLastName('');
  }

  const handleClickSave = () => {
    // TODO Save update profile
    alert("Save profile");
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