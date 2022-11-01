import s from './users.module.css'
import Loading from '../Loading';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  return (
    <>
      <Loading loading={props.loading}/>

      <div>

        {

          [...Array(props.totalPages)].map((page, i) =>
            <span style={{ cursor: 'pointer' }} onClick={() => props.onPageChanged(--i)} className={props.currentPage === i && s.selected}>{++i}</span>
          )
        }
      </div>
      {props.users.map((user) => (
        <div
          style={{
            border: "1px solid",
            marginTop: "10px"
          }}
        >
          <NavLink to={`/profile/${user.id}`}>
          <img className={s.user__image} src={user.image} alt={user.name} />
          </NavLink>
          <span> Name: {user.firstName}</span>
          <div>
            <span>Status: {user.status}</span>
            <button
              onClick={() => (user.followed ? props.unfollow(user.id) : props.follow(user.id))}
              style={{ cursor: "pointer" }}
            >
              {user.followed ? "Followed" : "UnFollowed"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default Users;
