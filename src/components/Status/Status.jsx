import { useState } from "react";

const Status = ({ status }) => {
   const [locStatus, setStatus] = useState(false);
   const onStatusChange = (prev, next) => {
      setStatus();
   };
   return (
      <>
         {locStatus ? (
            <input
               autoFocus={true}
               onBlur={() => setStatus(false)}
               type="text"
            />
         ) : (
            <span onDoubleClick={() => setStatus(true)}>No Status</span>
         )}
      </>
   );
};
export default Status;
