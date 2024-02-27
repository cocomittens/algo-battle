import NavBar from "../components/navbar";
import { fetchUserProfile } from "../util/user";

export default function Profile() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Profile</h1>
    </div>
  );
}
