import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import ky from "ky";
//
import LogoutButton from "./LogoutButton";
import { Profile, profileAtom } from "./profileAtom";

interface UserProfileProps {
  accessToken: string;
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ accessToken, onLogout }) => {
  const [profile, setProfile] = useRecoilState(profileAtom);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response: Profile = await ky
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json",
              },
            },
          )
          .json();
        setProfile(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile().then(() => console.log("Profile fetched"));
  }, [accessToken, setProfile]);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="d-flex align-items-center">
      <img
        src={profile.picture}
        alt="user"
        className="rounded-circle me-3"
        style={{ width: "50px", height: "50px" }}
      />
      <div>
        <p className="mb-0">Name: {profile.name}</p>
        <p className="mb-0">Email Address: {profile.email}</p>
      </div>
      <div className="ms-auto">
        <LogoutButton onLogout={onLogout} />
      </div>
    </div>
  );
};

export default UserProfile;
