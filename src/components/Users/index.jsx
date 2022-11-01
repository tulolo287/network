import s from './users.module.css'

const Users = (props) => {
  return (
    <>
      {props.loading && <div className={s.load}>
        Loading...
      </div>}

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
          <span> Name: {user.firstName}</span>
          <div>
            <span>Status: {user.status}</span>
            <button
              onClick={() => props.followToggle(!user.followed, user.id)}
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
