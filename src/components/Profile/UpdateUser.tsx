import { useState } from "react"
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import { UpdateMode } from "../../utils/types.d";

const UpdateUser = () => {
    const [updateMode, setUpdateMode] = useState(UpdateMode.DEFAULT);
    const handleReset = () => {
        setUpdateMode(UpdateMode.DEFAULT);
    }
    switch (updateMode) {
        case UpdateMode.EDIT_PROFILE:
            return <EditProfile onClose={handleReset} />;
        case UpdateMode.CHANGE_PASSWORD:
            return <ChangePassword onClose={handleReset} />;
        default:
            return (
                <div>
                    <button onClick={() => setUpdateMode(UpdateMode.CHANGE_PASSWORD)}>Change password</button>
                    <button onClick={() => setUpdateMode(UpdateMode.EDIT_PROFILE)}>Edit profile</button>
                </div>
            )
    }
}

export default UpdateUser