import React from "react";
import { useEffect, useState } from "react";

const ProfilePic = ({ profileData }) => {
  console.log(profileData[0]);
  const { picture } = profileData[0];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imgSrc = windowWidth <= 768 ? picture.medium : picture.large;

  return (
    <div className="m-8 max-sm:m-4 max-sm:mb-2 max-sm:mx-auto">
      <img alt="profile-pic" className="object-cover rounded-full" src={imgSrc}></img>
    </div>
  );
};

export default ProfilePic;
