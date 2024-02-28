import { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import { fetchUserProfile } from "../util/user";

export default function Profile(id: number) {
  const [profileData, setProfileData] = useState({ username: "" });

  useEffect(() => {
    fetchUserProfile(id).then((data) => {
      setProfileData(data);
    });
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <h1>Profile</h1>
      <span>{profileData.username}</span>
    </div>
  );
}
