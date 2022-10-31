import { connect } from "react-redux";

const mapToState = (state) => {
  return {
    users: state.usersReducer.users
  }
}

const mapToDispatch = (dispatch) {
  return {

  }
}

const UsersContainer = connect(mapToState, mapToDispatch)(Users)
export default UsersContainer