import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
//
import { profileAtom } from "./profileAtom";
import { fetchProfile } from "./profileService.ts";
import UserProfile from "./UserProfile.tsx";

interface UserProfileProps {
  accessToken: string;
}

const UserProfileContainer: React.FC<UserProfileProps> = ({ accessToken }) => {
  const [profile, setProfile] = useRecoilState(profileAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProfile(accessToken);
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData().then(() => console.log("Data fetched"));
  }, [setProfile]);

  if (!profile) {
    return <p>Loading profile...</p>;
  }
  return <UserProfile profile={profile} />;
};

export default UserProfileContainer;
