import { useAppDispatch } from "../../app/hooks";
import { deleteToken } from "../../features/slices/tokenSlice";
import { deleteUser } from "../../features/slices/userSlice";
import ProfileData from "./ProfileData"
import UpdateUser from "./UpdateUser";

const Profile = () => {
  const dispatch = useAppDispatch();

  const handleClickLogout = () => {
    dispatch(deleteToken());
    dispatch(deleteUser());
  }

  return (
    <div className="bg-whitesmoke p-6 rounded shadow-lg">
      <ProfileData />
      <button
        className="mt-4 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded transition duration-300"
        onClick={handleClickLogout}>
        Logout
      </button>
      <UpdateUser />
    </div>
  )
}

export default Profile