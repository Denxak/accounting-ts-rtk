import { useAppSelector } from "../../app/hooks"

const ProfileData = () => {
  const { firstName, lastName, login, roles } = useAppSelector(state => state.user)
  return (
    <div className="mb-4">
      <p className="text-gray-700 font-bold">First name: {firstName}</p>
      <p className="text-gray-700 font-bold">Last name: {lastName}</p>
      <p className="text-gray-700 font-bold">Login: {login}</p>
      <ul className="list-disc list-inside text-gray-700">
        {roles.map(r => <li key={r}>{r}</li>)}
      </ul>
    </div>
  )
}

export default ProfileData