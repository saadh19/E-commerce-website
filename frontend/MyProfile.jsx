import React from "react";

const MyProfile = () => {
  
  const userId=localStorage.getItem("userId")
  const name=localStorage.getItem("username");

  const email=localStorage.getItem("useremail");
  const password=localStorage.getItem("userpassword");
  return (
    <div className="profile">
      <h2>My Profile</h2>

      <p><strong>Userid:</strong> {userId}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {password}</p>
    </div>
  );
};

export default MyProfile;
