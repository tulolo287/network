import React, { useRef } from "react";
import { profileApi } from "../api/api";
import Status from "../Status/Status";

const ProfileInfo = (props) => {
   const refStatus = useRef();
   const addStatus = () => {
      props.user.changeStatus = true;
      profileApi.addStatus("");
   };
   return (
      <div>
         <img src={props.profile.image} alt="Profile" />
         <h3>My profile</h3>
         <Status status={props.user.status} />
         <h2>
            Hello id {props.user.userId} and email {props.user.email}
         </h2>
      </div>
   );
};

export default ProfileInfo;
