import s from "./users.module.css";
import Loading from "../Loading";
import { NavLink } from "react-router-dom";

const Users = (props) => {
   return (
      <>
         <Loading loading={props.loading} />

         <div>
            {[...Array(props.totalPages)].map((page, i) => {
               let pageNumber = ++i;
               return (
                  <span
                     style={{ cursor: "pointer" }}
                     onClick={() => props.onPageChanged(pageNumber)}
                     className={props.currentPage === pageNumber && s.selected}
                  >
                     {pageNumber}
                  </span>
               );
            })}
         </div>
         {props.users.map((user) => (
            <div
               style={{
                  border: "1px solid",
                  marginTop: "10px",
               }}
            >
               <NavLink to={`/profile/${user.id}`}>
                  <img
                     className={s.user__image}
                     src={user.image}
                     alt={user.name}
                  />
               </NavLink>
               <span> Name: {user.firstName}</span>
               <div>
                  <span>Status: {user.status}</span>
                  <button
                     disabled={props.isToggleFetching.includes(user.id)}
                     onClick={() =>
                        user.follow
                           ? props.setFollowThunk(user.id, false)
                           : props.setFollowThunk(user.id, true)
                     }
                     style={{ cursor: "pointer" }}
                  >
                     {user.follow ? "Followed" : "UnFollowed"}
                  </button>
               </div>
            </div>
         ))}
      </>
   );
};
export default Users;
