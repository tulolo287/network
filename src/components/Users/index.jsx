import axios from "axios";

const Users = (props) => {
  return (
    <>
      <div>
        <span>
          <bold>1</bold>
        </span>
        234
      </div>
      {props.users.map((user) => (
        <div
          style={{
            border: "1px solid",
            marginTop: "10px"
          }}
        >
          <span> Name: {user.name}</span>
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
