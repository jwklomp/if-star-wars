import React from "react";
//
import { Profile } from "./profileTypes.ts";

interface UserProfileProps {
  profile: Profile;
}

const UserProfile: React.FC<UserProfileProps> = ({ profile }) => (
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
  </div>
);

export default UserProfile;
