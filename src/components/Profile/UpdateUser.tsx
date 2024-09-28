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
                <div className="space-x-2 mt-4">
                    <button
                      className="border border-gray-400 rounded py-2 px-4 text-gray-700 hover:bg-gray-100"
                      onClick={() => setUpdateMode(UpdateMode.CHANGE_PASSWORD)}>
                        Change password
                    </button>
                    <button
                      className="border border-gray-400 rounded py-2 px-4 text-gray-700 hover:bg-gray-100"
                      onClick={() => setUpdateMode(UpdateMode.EDIT_PROFILE)}>
                        Edit profile
                    </button>
                </div>
            )
    }
}

export default UpdateUser