import { RootState, useAppSelector } from "../redux/store"

function Profile() {
  const user = useAppSelector((state: RootState) => state.user.value)
  console.log("user: ", user)

  return (
    <div>
      <h1>Profile Page</h1>
      <p> Name : </p>
      <p> Age : </p>
      <p> Email : </p>
    </div>
  )
}

export default Profile
